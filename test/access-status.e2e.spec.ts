import { TestSuite } from '@nest-datum/test';
import { 
  Importers, 
  HttpRequestSchema,
  TcpRequestSchema, 
  ValueParam, 
} from '@nest-datum/test/model';

import { AccessStatusHttpController } from '../src/api/access-status/access-status-http.controller';
import { AccessStatusHttpTcpController } from '../src/api/access-status/access-status-http-tcp.controller';
import { AccessStatusTcpController } from '../src/api/access-status/access-status-tcp.controller';
import { AccessStatusService } from '../src/api/access-status/access-status.service';
import { AccessStatus } from '../src/api/access-status/access-status.entity';
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
      cmd: 'accessStatus.many',
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
      cmd: 'accessStatus.one',
    },
    payload: {
      ...defaultBody,
      id: {
        type: 'custom',
        value: 'some-access-status-id',
      },
    },
    expectedResponse: {
      id: 'some-access-status-id',
    },
  },
  {
    type: 'tcp',
    event_pattern: 'accessStatus.drop',
    payload: eventPatternsRequests,
  },
  {
    type: 'tcp',
    event_pattern: 'accessStatus.dropMany',
    payload: eventPatternsRequests,
  },
  {
    type: 'tcp',
    event_pattern: 'accessStatus.create',
    payload: eventPatternsRequests,
  },
  {
    type: 'tcp',
    event_pattern: 'accessStatus.update',
    payload: eventPatternsRequests,
  }
] as TcpRequestSchema[];

const name_module = 'AccessStatus Module';
const importers: Importers = {
  controllers: {
    accessStatusHttpController: {
      name: 'AccessStatusHttpController',
      type: AccessStatusHttpController,
      uri_root: `/${process.env.SERVICE_HTTP}/access-status`,
      requests: accessOptionHttpRequests,
    },
    accessStatusHttpTcpController: {
      name: 'AccessStatusHttpTcpController',
      type: AccessStatusHttpTcpController,
      uri_root: `/${process.env.SERVICE_HTTP}/access-status`,
      requests: accessOptionHttpRequests,
    },
    accessStatusTcpController: {
      name: 'AccessStatusTcpController',
      type: AccessStatusTcpController,
      requests: accessOptionTcpRequests,
    },
  },
  services: {
    accessStatusService: {
      name: 'AccessStatusService',
      type: AccessStatusService,
      mock: {
        properties: {
          withTwoStepRemoval: false,
          withCache: false,
        },
      },
    },
  },
  mockDependencies: {
    repositories: [
      {
        type: AccessStatus,
        customMockers: {
          findOne: () => {
            return {
              'id': 'some-access-status-id',
            }
          },
        },
      },
    ],
  },
}

const testSuite = new TestSuite(name_module, importers, false);
testSuite.perform();
