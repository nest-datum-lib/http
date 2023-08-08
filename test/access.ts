import { TestSuite } from '@nest-datum/test';
import { 
  Importers, 
  HttpRequestSchema,
  TcpRequestSchema, 
  ValueParam, 
} from '@nest-datum/test/model';
import { AccessHttpController } from '../src/api/access/access-http.controller';
import { AccessHttpTcpController } from '../src/api/access/access-http-tcp.controller';
import { AccessTcpController } from '../src/api/access/access-tcp.controller';
import { AccessService } from '../src/api/access/access.service';
import { AccessAccessAccessOptionService } from '../src/api/access-access-access-option/access-access-access-option.service';
import { AccessAccessOptionService } from '../src/api/access-access-option/access-access-option.service';
import { AccessOptionService } from '../src/api/access-option/access-option.service';
import { Access } from '../src/api/access/access.entity';
import { AccessAccessOption } from '../src/api/access-access-option/access-access-option.entity';
import { RoleAccess } from '../src/api/role-access/role-access.entity';
import { RoleAccessService } from '../src/api/role-access/role-access.service';
import { AccessOption } from '../src/api/access-option/access-option.entity';
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
    value: 'Some custom description for new access.',
  },
  accessStatusId: {
    type: 'auto',
    value: {
      type: 'uuid',
    },
  },
} as Record<string, ValueParam>;

const accessHttpRequests = [
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
        type: "custom",
        value: "some-new-id",
      },
    },
  },
  {
    type: 'http',
    endpoint: '/some-id/role',
    method: 'post',
    expectedStatusCode: 201,
    bodySchema: {
      ...defaultBody,
      roleId: {
        type: 'auto',
        value: {
          type: 'uuid',
        },
      },
    },
  }
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

const accessTcpRequests = [
  {
    type: 'tcp',
    message_pattern: {
      cmd: 'access.many',
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
      cmd: 'access.one',
    },
    payload: {
      ...defaultBody,
      id: {
        type: 'custom',
        value: 'someid',
      },
    },
    expectedResponse: {
      id: 'someid',
    },
  },
  {
    type: 'tcp',
    event_pattern: 'access.drop',
    payload: eventPatternsRequests,
    expectedResponse: true,
  },
  {
    type: 'tcp',
    event_pattern: 'access.dropMany',
    payload: eventPatternsRequests,
  },
  {
    type: 'tcp',
    event_pattern: 'access.create',
    payload: eventPatternsRequests,
  },
  {
    type: 'tcp',
    event_pattern: 'access.update',
    payload: eventPatternsRequests,
  }
] as TcpRequestSchema[];

const name_module = 'Access Module';
const importers: Importers = {
  controllers: {
    accessHttpController: {
      name: 'AccessHttpController',
      type: AccessHttpController,
      uri_root: `/${process.env.SERVICE_HTTP}/access`,
      requests: accessHttpRequests,
    },
    accessHttpTcpController: {
      name: 'AccessHttpTcpController',
      type: AccessHttpTcpController,
      uri_root: `/${process.env.SERVICE_HTTP}/access`,
      requests: accessHttpRequests,
    },
    accessTcpController: {
      name: 'AccessTcpController',
      type: AccessTcpController,
      requests: accessTcpRequests,
    },
  },
  services: {
    accessService: {
      name: 'AccessService',
      type: AccessService,
    },
    accessOptionService: {
      name: 'AccessOptionService',
      type: AccessOptionService,
    },
    accessAccessOptionService: {
      name: 'AccessAccessOptionService',
      type: AccessAccessOptionService,
    },
    accessAccessAccessOptionService: {
      name: 'AccessAccessAccessOptionService',
      type: AccessAccessAccessOptionService,
    },
    roleAccessService: {
      name: 'RoleAccessService',
      type: RoleAccessService,
    },
  },
  mockDependencies: {
    repositories: [
      {
        type: Access,
        customMockers: {
          findOne: () => {
            return {
              id: 'someid',
            }
          }
        }
      },
      ...[
        AccessOption, 
        AccessAccessOption, 
        AccessAccessAccessOption, 
        RoleAccess,
      ].map(repo => ({
        type: repo
      }))
    ],
  },
}

const testSuite = new TestSuite(name_module, importers, false);
testSuite.perform();
