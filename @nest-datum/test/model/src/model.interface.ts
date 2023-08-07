import { Type, DynamicModule } from "@nestjs/common";
import { EntityClassOrSchema } from "@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type";
import { ValueParam } from "@nest-datum/test/model";

/**
 * Used for RequestSchema.
 */
export type RequestBodySchema = Record<string, ValueParam>;
export type RequestQuerySchema = Record<string, ValueParam>;

export type URI = string;
export type EventPattern = {
  cmd: string;
};

export type HttpMethod =
'get'     |
'head'    |
'post'    |
'put'     |
'delete'  |
'connect' |
'options' |
'trace'   |
'patch';

/**
 * Schema of testing request that used for to send to specified controllers.
 * Describes:
 *  - endpoint URI or EventPattern
 *  - http method
 *  - request body schema
 *  - URI queries params
 *  - http status code expectation
 *  - response expectation
 */
export type HttpRequestSchema = {
  type: 'http';
  endpoint: URI;
  method: HttpMethod;
  bodySchema?: RequestBodySchema;
  querySchema?: RequestQuerySchema;
  expectedStatusCode: number;
  expectedResponse?: string | Record<string, string>;
};

export type TcpRequestSchema = {
  type: 'tcp';
  pattern: EventPattern;
  payload: RequestBodySchema;
  expectedResponse?: any;
};

/**
 * @param funcName function name that should be named as function of your importer you want to test.
 * @param args arguments array for `func`.
 * @param expectFuncName function name that should test result of `func` function.
 * @param expectArgs arguments array for `expectFunc`.
 * @param customImplementation mock implementation of function so 
 * that will return desired result. By default it's `() => true`.
 */
export type UnitTestBody = {
  funcName: string;
  args?: any[];
  expectFuncName: string; 
  expectArgs?: any[];
  customImplementation?: (...args: any[]) => any;
};

/**
 * Unit test schema for importers;
 */
export type UnitTestSchema = {
  [title:string]: UnitTestBody;
};

/**
 * This is how you should describe Nest Providers modules for testing.
 * @param name - the name of the provider(used to describe it in test coverages).
 * @param type - instance of desired Nest Provider(without new).
 * @param value - initialized instance of the Nest Provider(
 *  ignore this parameter because it will be used by TestSuite for internal operations
 * )
 * @param mock - to mock given instance or not(
 *  recommended if just need to test controllers without performing any services logic
 * )
 */
export type ServiceMeta = {
  name: string;
  type: Type<any>;
  value?: Type<any>;
  mock?: {
    perform: boolean;
    customFactory?: <T = any>(
      customMockers?: Record<string, MockTargetFunction>
    ) => MockType<T>;
    customMockers?: Record<string, MockTargetFunction>,
  };
  unit?: UnitTestSchema;
};

/**
 * This is how you should describe Controllers modules for testing.
 * @param name - the name of the controller(used to describe it in test coverages).
 * @param type - instance of desired Controller(without new).
 * @param value - initialized instance of the Nest Provider(
 *  ignore this parameter because it's used by TestSuite for internal operations
 * )
 * @param requests - array of requests(See RequestSchema).
 */
export type ControllerMeta = {
  name: string;
  type: Type<any>;
  uri_root?: string;
  value?: Type<any>;
  requests?: HttpRequestSchema[] | TcpRequestSchema[];
  unit?: UnitTestSchema;
};

export type RepositoryMeta ={
  type: EntityClassOrSchema;
  customMockers?: Record<string, MockTargetFunction>;
};

/**
 * This is how you should describe your object you specify to TestSuite.
 * @param modules - your nest modules.
 * @param controllers - your controllers.
 * @param services - your providers.
 * @param dependencies - another dependencies your module have(repositories, etc).
 * In dependencies.repositories you should specify array of Entities,
 * that your providers used for to inject repository.
 */
export type Importers = {
  modules?: DynamicModule[],
  controllers: Record<string, ControllerMeta>;
  services: Record<string, ServiceMeta>;
  mockDependencies: {
    repositories: RepositoryMeta[];
  };
};

export type MockType<T> = {
  [P in keyof T]?: jest.Mock<{}>;
};

export type MockTargetFunction = (...args: any[]) => unknown;
