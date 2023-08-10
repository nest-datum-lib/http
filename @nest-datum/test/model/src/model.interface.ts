import { Type, DynamicModule } from "@nestjs/common";
import { EntityClassOrSchema } from "@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type";
import { ValueParam } from "@nest-datum/test/model";

/**
 * Used for HttpRequestSchema and TcpRequestSchema.
 */
export type RequestBodySchema = Record<string, ValueParam>;
/**
 * Used for URI query parameters.
 */
export type RequestQuerySchema = Record<string, ValueParam>;

export type URI = string;

export type MessagePattern = {
  [message_name: string]: string;
};
export type EventPattern = string;

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
 * Schema of testing request that used for 
 * to send to specified http controllers.
 * Describes:
 *  - type should be http
 *  - endpoint URI
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

/**
 * Schema of testing request that used for 
 * to send to specified tcp controllers.
 * Describes:
 *  - type should be tcp
 *  - message pattern
 *  - event pattern
 *  - payload, the same as a bodySchema
 *  - response expectation
 */
export type TcpRequestSchema = {
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

export type MockParams = {
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
 */
export type ServiceMeta = {
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
 */
export type ControllerMeta = {
  name: string;
  type: Type<any>;
  uri_root?: string;
  value?: Type<any>;
  requests?: HttpRequestSchema[] | TcpRequestSchema[];
  unit?: UnitTestSchema;
  mock?: MockParams;
};

export type RepositoryMeta ={
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
export type Importers = {
  controllers: Record<string, ControllerMeta>;
  services: Record<string, ServiceMeta>;
  mockDependencies: {
    modules?: DynamicModule[],
    repositories: RepositoryMeta[];
  };
};

export type MockType<T> = {
  [P in keyof T]?: jest.Mock<{}> | {};
};

export type MockTargetFunction = (...args: any[]) => unknown;

export type Mocker = MockTargetFunction | {};

export type VerboseParam = boolean | {tcp?: boolean, http?: boolean};
