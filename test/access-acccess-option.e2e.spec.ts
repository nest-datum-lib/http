import { TestSuite } from '@nest-datum/test';
import { 
  Importers, 
  HttpRequestSchema,
  TcpRequestSchema, 
  ValueParam, 
} from '@nest-datum/test/model';
import { AccessAccessOptionHttpController } from '../src/api/access-access-option/access-access-option-http.controller';
import { AccessAccessOptionHttpTcpController } from '../src/api/access-access-option/access-access-option-http-tcp.controller';
import { AccessAccessOptionTcpController } from '../src/api/access-access-option/access-access-option-tcp.controller';
import { AccessAccessOptionService } from '../src/api/access-access-option/access-access-option.service';
import { AccessAccessOption } from '../src/api/access-access-option/access-access-option.entity';
import { defaultBodyParams } from './mock/default-body-params';

const defaultBody = {
  ...defaultBodyParams,
  userId: {
    type: 'auto',
    value: {
      type: 'uuid',
    },
  },
  name: {
    type: 'auto',
    value: {
      type: 'string',
      config: {
        pattern: 'any',
        length: 5,
      },
    },
  },
  isNotDelete: {
    type: 'auto',
    value: {
      type: 'boolean',
    },
  },
  description: {
    type: 'custom',
    value: 'Some custom description for new setting.',
  },
  accessStatusId: {
    type: 'auto',
    value: {
      type: 'uuid',
    },
  },
  value: {
    type: 'auto',
    value: {
      type: 'string',
      config: {
        pattern: 'any',
        length: 10,
      },
    },
  },
  dataTypeId: {
    type: 'auto',
    value: {
      type: 'uuid',
    },
  },
  isDeleted: {
    type: 'auto',
    value: {
      type: 'boolean',
    },
  },
  accessId: {
    type: 'auto',
    value: {
      type: 'uuid',
    },
  },
  accessOptionId: {
    type: 'auto',
    value: {
      type: 'uuid',
    },
  },
} as Record<string, ValueParam>;

const accessAccessOptionHttpRequests = [
  {
    type: 'http',
    endpoint: `/some-id`,
    method: 'post',
    expectedStatusCode: 201,
    bodySchema: {
      ...defaultBody,
    },
  },
  {
    type: 'http',
    endpoint: '/some-old-id',
    method: 'patch',
    expectedStatusCode: 200,
    bodySchema: {
      ...defaultBody,
      id: {
        type: 'auto',
        value: {
          type: 'uuid',
        },
      },
    },
  },
] as HttpRequestSchema[];

const eventPatternsRequests = {
  ...defaultBody,
  ids: [{
    type: 'auto',
    value: {
      type: 'uuid',
    },
  }],
  isDeleted: {
    type: 'auto',
    value: {
      type: 'boolean',
    },
  },
};

const settingTcpRequests = [
  {
    type: 'tcp',
    message_pattern: {
      cmd: 'accessOptionRelation.many',
    },
    payload: {
      ...defaultBody,
      id: {
        type: 'custom',
        value: 'id1'
      },
    },
    expectedResponse: {},
  },
  {
    type: 'tcp',
    message_pattern: {
      cmd: 'accessOptionRelation.one',
    },
    payload: {
      ...defaultBody,
      id: {
        type: "custom",
        value: 'someid',
      },
    },
    expectedResponse: {
      id: 'someid',
    },
  },
  {
    type: 'tcp',
    event_pattern: 'accessOptionRelation.drop',
    payload: eventPatternsRequests,
  },
  {
    type: 'tcp',
    event_pattern: 'accessOptionRelation.dropMany',
    payload: eventPatternsRequests,
  },
  {
    type: 'tcp',
    event_pattern: 'accessOptionRelation.create',
    payload: eventPatternsRequests,
  },
] as TcpRequestSchema[];

const name_module = 'AccessAccessOption Module';
const importers: Importers = {
  controllers: {
    accessAccessOptionHttpController: {
      name: 'AccessAccessOptionHttpController',
      type: AccessAccessOptionHttpController,
      uri_root: `/${process.env.SERVICE_HTTP}/access/option`,
      requests: accessAccessOptionHttpRequests,
    },
    accessAccessOptionHttpTcpController: {
      name: 'AccessAccessOptionHttpTcpController',
      type: AccessAccessOptionHttpTcpController,
      uri_root: `/${process.env.SERVICE_HTTP}/access/option`,
      requests: accessAccessOptionHttpRequests,
    },
    accessAccessOptionTcpController: {
      name: 'AccessAccessOptionTcpController',
      type: AccessAccessOptionTcpController,
      requests: settingTcpRequests,
    },
  },
  services: {
    accessAccessOptionService: {
      name: 'AccessAccessOptionService',
      type: AccessAccessOptionService,
    },
  },
  mockDependencies: {
    repositories: [
      {
        type: AccessAccessOption,
        customMockers: {
          findOne: () => {
            return {
              'id': 'someid',
            }
          }
        }
      }
    ]
  },
}

const testSuite = new TestSuite(name_module, importers, false);
testSuite.perform();
