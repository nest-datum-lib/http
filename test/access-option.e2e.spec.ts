import { TestSuite } from '@nest-datum/test';
import { 
  Importers, 
  HttpRequestSchema,
  TcpRequestSchema, 
  ValueParam, 
} from '@nest-datum/test/model';

import { AccessOptionHttpController } from '../src/api/access-option/access-option-http.controller';
import { AccessOptionHttpTcpController } from '../src/api/access-option/access-option-http-tcp.controller';
import { AccessOptionTcpController } from '../src/api/access-option/access-option-tcp.controller';
import { AccessOptionService } from '../src/api/access-option/access-option.service';
import { AccessOption } from '../src/api/access-option/access-option.entity';
import { AccessAccessOption } from '../src/api/access-access-option/access-access-option.entity';
import { Access } from '../src/api/access/access.entity';
import { AccessAccessAccessOption } from '../src/api/access-access-access-option/access-access-access-option.entity';
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
} as Record<string, ValueParam>;

const accessOptionHttpRequests = [
  {
    type: 'http',
    endpoint: `/`,
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

const accessOptionTcpRequests = [
  {
    type: 'tcp',
    message_pattern: {
      cmd: 'accessOption.many',
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
      cmd: 'accessOption.one',
    },
    payload: {
      ...defaultBody,
      id: {
        type: "custom",
        value: 'some-access-option-id',
      },
    },
    expectedResponse: {
      id: 'some-access-option-id',
    },
  },
  {
    type: 'tcp',
    event_pattern: 'accessOption.drop',
    payload: eventPatternsRequests,
  },
  {
    type: 'tcp',
    event_pattern: 'accessOption.dropMany',
    payload: eventPatternsRequests,
  },
  {
    type: 'tcp',
    event_pattern: 'accessOption.create',
    payload: eventPatternsRequests,
  },
  {
    type: 'tcp',
    event_pattern: 'accessOption.update',
    payload: eventPatternsRequests,
  }
] as TcpRequestSchema[];

const name_module = 'AccessOption Module';
const importers: Importers = {
  controllers: {
    accessOptionHttpController: {
      name: 'AccessOptionHttpController',
      type: AccessOptionHttpController,
      uri_root: `/${process.env.SERVICE_HTTP}/access-option`,
      requests: accessOptionHttpRequests,
    },
    accessOptionHttpTcpController: {
      name: 'AccessOptionHttpTcpController',
      type: AccessOptionHttpTcpController,
      uri_root: `/${process.env.SERVICE_HTTP}/access-option`,
      requests: accessOptionHttpRequests,
    },
    accessOptionTcpController: {
      name: 'AccessOptionTcpController',
      type: AccessOptionTcpController,
      requests: accessOptionTcpRequests,
    },
  },
  services: {
    accessOptionService: {
      name: 'AccessOptionService',
      type: AccessOptionService
    },
  },
  mockDependencies: {
    repositories: [
      {
        type: AccessOption,
        customMockers: {
          findOne: () => {
            return {
              'id': 'some-access-option-id',
            }
          },
          metadata: {
            tableName: () => 'wrappedNameTable',
          },
        },
      },
      {
        type: AccessAccessOption,
        customMockers: {
          findOne: () => {
            return {
              'id': 'some-access-relation-id',
            }
          }
        }
      },
      {
        type: Access,
        customMockers: {
          findOne: () => {
            return {
              'id': 'some-access-id',
            }
          }
        }
      },
      {
        type: AccessAccessAccessOption,
        customMockers: {
          findOne: () => {
            return {
              'id': 'some-access-access-relational-id',
            }
          }
        }
      }
    ]
  },
}

const testSuite = new TestSuite(name_module, importers, false);
testSuite.perform();
