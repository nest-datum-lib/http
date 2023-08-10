import { Type, DynamicModule } from "@nestjs/common";
import { EntityClassOrSchema } from "@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type";
import { ValueParam } from "@nest-datum/test/model";

/**
 * Used for HttpRequestSchema and TcpRequestSchema.
 */
type RequestBodySchema = Record<string, ValueParam>;
/**
 * Used for URI query parameters.
 */
type RequestQuerySchema = Record<string, ValueParam>;

type URI = string;

type MessagePattern = {
  [message_name: string]: string;
};
type EventPattern = string;

type HttpMethod =
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
 * Schema of testing request that used for 
 * to send to specified http controllers.
 * @param type request type.
 * @param endpoint reference to the specific resource of controller.
 * @param method http method of the endpoint.
 * @param bodySchema request body descriptions.
 * @param querySchema URL query parameters descriptions.
 * @param expectedStatusCode status code that should be received from the server.
 * @param expectedResponse response that should be received from the server.
 */
type HttpRequestSchema = {
  type: 'http';
  endpoint: URI;
  method: HttpMethod;
  bodySchema?: RequestBodySchema;
  querySchema?: RequestQuerySchema;
  expectedStatusCode: number;
  expectedResponse?: string | Record<string, string>;
};

/**
 * Schema of testing request that used for 
 * to send to specified tcp controllers.
 * @param type request type
 * @param message_pattern RCP message pattern
 * @param event_pattern RCP event pattern
 * @param payload input data to the server
 * @param expectedResponse response that should be received from the server.
 */
type TcpRequestSchema = {
  type: 'tcp';
  message_pattern?: MessagePattern;
  event_pattern?: EventPattern;
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
type UnitTestBody = {
  funcName: string;
  args?: any[];
  expectFuncName: string; 
  expectArgs?: any[];
  customImplementation?: (...args: any[]) => any;
};

/**
 * Unit test schema for importers;
 */
type UnitTestSchema = {
  [title:string]: UnitTestBody;
};

/**
 * Mock descriptions for importers.
 * If you want to mock some importer, you need to set `perform` to true.
 * @param perform to mock importer or not
 * @param customFactory user-specific mocker factory(
 *  see examples in the src/mock/ dir.
 * )
 * @param customMockers custom functions that should be mocked(
 *  used when you don't want to write own custom factory,
 *  just to mock specific functions.
 * )
 * @param properties user-specifc properties of the importer(
 *  used when you want to mock some private or public variables.
 * )
 */
type MockParams = {
  perform?: boolean;
  customFactory?: <T = any>(
    customMockers?: Record<string, Mocker>
  ) => MockType<T>;
  customMockers?: Record<string, Mocker>,
  properties?: Record<string, any>,
};

/**
 * This is how you should describe Nest Providers modules for testing.
 * @param name - the name of the provider(used to describe it in test coverages).
 * @param type - instance of desired Nest Provider(without new).
 * @param value - initialized instance of the Nest Provider(
 *  ignore this parameter because it will be used by TestSuite for internal operations
 * )
 * @param mock - override logic of the instance by given mock params(
 *  recommended if just need to test controllers without performing any services logic
 * )
 * @param unit - unit tests descriptions.
 */
type ServiceMeta = {
  name: string;
  type: Type<any>;
  value?: Type<any>;
  mock?: MockParams;
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
 * @param mock - override logic of the instance by given mock params
 * @param unit - unit test descriptions.
 */
type ControllerMeta = {
  name: string;
  type: Type<any>;
  uri_root?: string;
  value?: Type<any>;
  requests?: HttpRequestSchema[] | TcpRequestSchema[];
  unit?: UnitTestSchema;
  mock?: MockParams;
};

/**
 * This is how you should describe repository modules for testing.
 * @param type entity that should be injected as a repository.
 * @param customMockers custom functions that should be mocked(
 *  used when you don't want to write own custom factory,
 *  just to mock specific functions.
 * )
 */
type RepositoryMeta ={
  type: EntityClassOrSchema;
  customMockers?: Record<string, Mocker>;
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
type Importers = {
  controllers: Record<string, ControllerMeta>;
  services: Record<string, ServiceMeta>;
  mockDependencies: {
    modules?: DynamicModule[],
    repositories: RepositoryMeta[];
  };
};

type MockType<T> = {
  [P in keyof T]?: jest.Mock<{}> | {};
};
type MockTargetFunction = (...args: any[]) => unknown;
type Mocker = MockTargetFunction | {};

/**
 * Parameters used to specify should TestSuite module print out 
 * requests that sends to controllers or not.
 *  - You can specify it just as a boolean to print all requests or not.
 *  - Or specify object that should contain at least tcp or http properties 
 * with type boolean, so that TestSuite should log requests from TCP or HTTP controllers,
 * or both of them.
 */
type VerboseParam = boolean | {tcp?: boolean, http?: boolean};

export {
  RequestBodySchema,
  RequestQuerySchema,
  URI,
  MessagePattern,
  EventPattern,
  HttpMethod,
  HttpRequestSchema,
  TcpRequestSchema,
  UnitTestBody,
  UnitTestSchema,
  MockParams,
  ServiceMeta,
  ControllerMeta,
  RepositoryMeta,
  Importers,
  MockType,
  MockTargetFunction,
  Mocker,
  VerboseParam,
};
