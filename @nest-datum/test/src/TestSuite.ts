import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { 
  ClientsModule, 
  Transport, 
  ClientProxy,
} from '@nestjs/microservices';
import * as request from 'supertest';
import { HttpTestingLogger, TcpTestingLogger } from '@nest-datum/test';
import { createMock } from '@golevelup/ts-jest';
import { repositoryMockFactory } from '@nest-datum/test';
import { transportServiceMockFactory } from '@nest-datum/test';
import { TransportService } from '@nest-datum/transport';
import { CacheService } from '@nest-datum/cache';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { json } from 'body-parser';
import { 
  Importers,
  ControllerMeta, 
  ServiceMeta, 
} from '../model';
import { 
  generateRequest, 
  generateQueries,
} from '../utils';
import { 
  HttpRequestSchema, 
  TcpRequestSchema, 
  UnitTestBody,
} from '../model/src/model.interface';
import { Observable } from 'rxjs';

require('dotenv').config();

/**
 * A class used for performing unit and e2e tests
 * on given nest controllers, providers.
 */
export default class TestSuite {
  private app: INestApplication;
  private tcpClient: ClientProxy;
  private readonly default_dependencies = {
    cacheService: {
      name: 'CacheService',
      type: CacheService,
      mock: {
        perform: true,
      },
    },
    connectionService: {
      name: 'Connection',
      type: Connection,
      mock: {
        perform: true,
      },
    },
    transportService: {
      name: 'TransportService',
      type: TransportService,
      mock: {
        perform: true,
        customFactory: transportServiceMockFactory,
      },
    },
  } as unknown as Record<string, ServiceMeta>;

  /**
   * @param name the name of the module tests performs for.
   * @param importers input components of the module we perform tests for.
   * Importers consist of controllers, services and the injected repositories
   * of the services we import to.
   * The root modules of the controllers and services TestSuite
   * will mock and inject.
   * @param verbose enables logger middleware which logs res/req for 
   * every endpoints tests. Useful for debugging.
   */
  constructor(
    private readonly name: string,
    private readonly importers: Importers,
    private readonly verbose: boolean,
  ) {}

  /**
   * Performs preparation and coverages all tests from imports. 
   */
  public async perform() {
    describe(`Performing test suite for ${this.name}`, () => {
      describe('Initializing main components', () => {
        beforeAll(async () => await this.prepare());
        it('App should be defined', () => {
          expect(this.app).toBeDefined();
        });
        it('TCP Client should be defined', () => {
          expect(this.tcpClient).toBeDefined();
        });
      });
  
      describe('Performing unit tests', this.coverageUnitTests.bind(this));
      describe('Performing e2e tests', this.coverageE2ETests.bind(this));
      
      afterAll(async () => await this.finish());
    });
  }

  /**
   * Prepares all important components for testing suite.
   * Creates testing module in which injects providers, controllers
   * and other dependencies.
   */
  private async prepare() {
    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [
        ClientsModule.register([
          { name: 'client', transport: Transport.TCP },
        ]),
      ],
      controllers: [
        ...(Object.values(this.importers.controllers)
          .map(controllerMeta => controllerMeta.type)),
      ],
      providers: [
        ...this.importers.mockDependencies.repositories.map(
          entityMeta => {
            return {
              provide: getRepositoryToken(entityMeta.type),
              useFactory: repositoryMockFactory.bind(
                entityMeta.type, entityMeta.customMockers
              ),
            };
          }
        ),

        ...Object.values(
          Object.assign(
            this.default_dependencies, 
            this.importers.services
          )
        )
          .map(serviceMeta => {
            console.log(JSON.stringify(serviceMeta.type.prototype, null, '\t'));
            // serviceMeta.type.prototype.withTwoStepRemoval = false;
            // Object.defineProperty(servi)

            if (serviceMeta?.mock && serviceMeta.mock.perform) {
              if (serviceMeta.mock.customFactory) {
                return {
                  provide: serviceMeta.type,
                  useFactory: serviceMeta.mock.customFactory.bind(
                    serviceMeta.type,
                    serviceMeta.mock.customMockers
                  ),
                };
              } else return {
                provide: serviceMeta.type,
                useValue: createMock<typeof serviceMeta.type>()
              };
            } else return serviceMeta.type;

          }),
      ],
    })
      .compile();

    this.app = moduleRef.createNestApplication();
    await this.init();
  }

  private async init() {
    this.app.use(json());

    const microservice = await this.app.connectMicroservice({
      transport: Transport.TCP,
    });
    
    if (this.verbose) {
      this.app.use(new HttpTestingLogger().use.bind(HttpTestingLogger));
      microservice.useGlobalInterceptors(
        new TcpTestingLogger()
      );
      // this.app.useGlobalInterceptors(new TcpTestingLogger());
    }

    await this.app.startAllMicroservices();
    await this.app.init();

    Object.keys(this.importers).forEach(key => {
      Object.keys(this.importers[key]).forEach(importer => {
        this.importers[key][importer].value = 
          this.app.get<this.importers[key][importer].type>(
            this.importers[key][importer].type
          );
      });
    });

    this.tcpClient = this.app.get('client');
    await this.tcpClient.connect();
  }

  private validateUnitTestSchema(
    importerMeta: ControllerMeta | ServiceMeta,
    testTitle: string,
    test: UnitTestBody,  
  ) {
    if (!testTitle.trim())
      throw new Error('Invalid testTitle!');
    if (!test.funcName)
      throw new Error('Test function should be specified!');
    if (!importerMeta.type.prototype?.[test.funcName])
      throw new Error(`${test.funcName} is not a function of ${importerMeta.name}!`);
    if (!test.expectFuncName)
      throw new Error('Expected function should be specified!');
    if (!expect(1)?.[test.expectFuncName])
      throw new Error(`${test.expectFuncName} is not a function of jest.expect!`);
    if (
      test.expectArgs &&
      (
        !Array.isArray(test.expectArgs) ||
        !test.expectArgs.length
      )
    ) throw new Error(
      'Invlaid arguments for expected function, expected non-empty array.'
    );
    if (
      test.args &&
      (
        !Array.isArray(test.args) ||
        !test.args.length
      )
    ) throw new Error(
      'Invalid arguments for function, expected non-empty array.'
    );
  }

  private validateAnyRequest(request: HttpRequestSchema | TcpRequestSchema) {
    if (!request.type)
      throw new Error('Request type is not specified!');
    if (!request.type)
      throw new Error('Request type is not specified!');
  }

  private validateHttpRequest(request: HttpRequestSchema) {
    if (!request.method)
      throw new Error('Request method is not specified!');
    if (!request.expectedStatusCode)
      throw new Error('Expected status code is not specified');
    if (!request.endpoint)
      throw new Error('Endpoint is not specified!');
  }

  private validateTcpRequest(request: TcpRequestSchema) {
    if (
      !request.message_pattern &&
      !request.event_pattern
    ) {
      throw new Error(
        'TCP Requests requires message or event pattern. Received - nothing!'
      );
    }
    if (!request.payload)
      throw new Error('Payload is not specified!');
  }

  /**
   * Coverages all unit tests. At least, it checks 
   * wether controller or service has been defined.
   * Moreover checks for addition tests for them if specified.
   */
  private coverageUnitTests() {
    Object.keys(this.importers).forEach(key => {
      if (key === 'mockDependencies') return;
      describe(`${key} should be defined`, () => {
        (Object.values(this.importers[key]) as (ControllerMeta | ServiceMeta)[])
          .forEach(importerMeta => {
            it(importerMeta.name, () => {
              return expect(importerMeta.value).toBeDefined();
            });
          });
      });

      describe('user tests', () => {
        (Object.values(this.importers[key]) as (ControllerMeta | ServiceMeta)[])
          .forEach(importerMeta => {
            if (!importerMeta.unit) return;

            for (const [testTitle, test] of Object.entries(importerMeta.unit)) {
              this.validateUnitTestSchema(importerMeta, testTitle, test);
              let spyFunc: jest.SpyInstance;
              it(testTitle, () => {
                spyFunc = jest.spyOn(
                  importerMeta.type.prototype,
                  test.funcName
                )
                  .mockImplementation(
                    test.customImplementation ?
                    test.customImplementation :
                    () => true
                  );

                importerMeta.type.prototype?.[test.funcName](
                  ...(test.args ? test.args : [])
                );
                
                expect(spyFunc)?.[test.expectFuncName](
                  ...(test.expectArgs ? test.expectArgs : [])
                );
              });

              afterEach(() => spyFunc.mockClear());
            }
          });
      });
    });
  }

  /**
   * Coverages all e2e tests for controllers.
   * It checks by given request for every endpoint user specified.
   */
  private coverageE2ETests() {
    Object.keys(this.importers).forEach(key => {
      if (key !== 'controllers') return;

      (Object.values(this.importers[key]) as ControllerMeta[])
        .forEach(controllerMeta => {
          if (!controllerMeta?.requests?.length) return;
          const uri_root = controllerMeta.uri_root;
          describe(`sending requests to ${controllerMeta.name} controller`, () => {
            for (const request of controllerMeta.requests)
              this.peformE2ETest(request, uri_root);
          });
        });
    });
  }

  private peformE2ETest(
    request: HttpRequestSchema | TcpRequestSchema, 
    uri_root?: string,
  ) {
    this.validateAnyRequest(request);
    if (request.type === 'http') {
      this.testHttpRequest(request, uri_root);
    } else if (request.type === 'tcp') {
      this.testTcpRequest(request);
    } else throw new Error('Unkown request type!');
  }

  private testHttpRequest(request: HttpRequestSchema, uri_root?: string) {
    this.validateHttpRequest(request);

    let request_method: Function | undefined;
    beforeEach(() => {
      request_method = this.httpServer?.[request.method.toLowerCase()]; 
    });

    it(`request method ${request.method} should be defined`, () => {
      expect(request_method).toBeDefined();
    });

    it(
      `${request.method.toUpperCase()} to ${request.endpoint}` +
      `, expected ${request.expectedStatusCode} ` +
      `${request.expectedResponse !== undefined ? 
        `with response ${JSON.stringify(request.expectedResponse, null)}` : 
        ''}`,
      () => {
        const queried_uri = this.formUri(request);
        let fluent_test = request_method(
          uri_root ? 
          `${uri_root}${queried_uri}` :
          queried_uri
        );

        if (request.bodySchema)
          fluent_test = fluent_test.send(
            generateRequest(request.bodySchema)
          );

        [request.expectedResponse, request.expectedStatusCode]
          .map(expectaction => {
            if (expectaction)
              fluent_test = fluent_test.expect(expectaction);
          });
        
        return fluent_test;
    });
  }

  private testTcpRequest(request: TcpRequestSchema) {
    this.validateTcpRequest(request);

    it(
      `TCP request to ${
        request.message_pattern ? 
        JSON.stringify(request.message_pattern, null) :
        JSON.stringify(request.event_pattern, null)
      } pattern` +
      `${
        request.expectedResponse !== undefined ? 
        `, expected response ${
          JSON.stringify(request.expectedResponse, null)
        }` :
        ''
      }`,
      (done) => {
        const generated_payload = generateRequest(request.payload);
        let response: Observable<any>;

        if (request.message_pattern) {
          response = this.tcpClient.send(
            request.message_pattern,
            generated_payload,
          );
          response.subscribe(res => {
            expect(res).toEqual(request.expectedResponse);
            done();
          });
        } else if (request.event_pattern) {
          response = this.tcpClient.emit(
            request.event_pattern,
            generated_payload,
          );
          done();
        } else {
          throw new Error(
            'TCP Requests requires message or event pattern. Received - nothing!'
          );
        }
      }
    );
  }

  private formUri(request: HttpRequestSchema) {
    return request.querySchema ?
    `${request.endpoint}${generateQueries(request.querySchema)}` :
    request.endpoint;
  }

  /**
   * Performs finish stage after the all tests.
   */
  private async finish() {
    jest.clearAllMocks();
    await this.app.close();
    await this.tcpClient.close();
  }

  /**
   * Getter of the http server to be able to perform e2e requests.
   */
  private get httpServer() {
    return request(this.app.getHttpServer());
  }
}
