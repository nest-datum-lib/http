import { TestSuite } from '@nest-datum/test';
import { 
  Importers, 
  HttpRequestSchema,
  TcpRequestSchema, 
  ValueParam, 
} from '@nest-datum/test/model';

import { RoleAccessHttpController } from '../src/api/role-access/role-access-http.controller';
import { RoleAccessHttpTcpController } from '../src/api/role-access/role-access-http-tcp.controller';
import { RoleAccessTcpController } from '../src/api/role-access/role-access-tcp.controller';
import { RoleAccessService } from '../src/api/role-access/role-access.service';
import { RoleAccess } from '../src/api/role-access/role-access.entity';
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
  isDeleted: {
    type: 'auto',
    value: {
      type: 'boolean',
    },
  },
  roleId: {
    type: 'auto',
    value: {
      type: 'uuid',
    },
  },
  accessId: {
    type: 'auto',
    value: {
      type: 'uuid',
    },
  }
} as Record<string, ValueParam>;

const defaultQueries = {
  select: {
    type: 'custom',
    value: ['sdsd', 'asdasd'],
  },
  relations: {
    type: 'custom',
    value: ['asdsadsa'],
  },
};

const roleAccessHttpRequests = [
  {
    type: 'http',
    endpoint: `/`,
    method: 'get',
    expectedStatusCode: 200,
    bodySchema: {
      ...defaultBody,
    },
    querySchema: {
      ...defaultQueries,
      page: {
        type: 'custom',
        value: 2
      },
      limit: {
        type: 'auto',
        value: {
          type: 'number',
          config: {
            length: 10,
          }
        }
      },
      query: {
        type: 'auto',
        value: {
          type: 'string',
          config: {
            pattern: 'sssssss',
            length: 10,
          }
        }
      },
      filter: {
        type: 'custom',
        value: ['filter-test']
      },
      sort: {
        type: 'custom',
        value: ['test']
      }
    }
  },
  {
    type: 'http',
    endpoint: '/some-role-access-id',
    method: 'get',
    expectedStatusCode: 200,
    querySchema: {
      ...defaultQueries,
      id: {
        type: 'auto',
        value: {
          type: 'uuid',
        },
      },
    },
    bodySchema: {
      ...defaultBody,
    },
  },
  {
    type: 'http',
    endpoint: '/some-role-access-id',
    method: 'delete',
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
  {
    type: 'http',
    endpoint: '/',
    method: 'delete',
    expectedStatusCode: 200,
    querySchema: {
      ids: [
        {
          type: 'auto',
          value: {
            type: 'uuid'
          }
        },
        {
          type: 'auto',
          value: {
            type: 'uuid'
          }
        },
      ]
    },
    bodySchema: {
      ...defaultBody,
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

const roleAccessTcpRequests = [
  {
    type: 'tcp',
    message_pattern: {
      cmd: 'roleAccess.many',
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
      cmd: 'roleAccess.one',
    },
    payload: {
      ...defaultBody,
      id: {
        type: "custom",
        value: 'some-role-access-id',
      },
    },
    expectedResponse: {
      id: 'some-role-access-id',
    },
  },
  {
    type: 'tcp',
    event_pattern: 'roleAccess.drop',
    payload: eventPatternsRequests,
  },
  {
    type: 'tcp',
    event_pattern: 'roleAccess.dropMany',
    payload: eventPatternsRequests,
  },
  {
    type: 'tcp',
    event_pattern: 'roleAccess.create',
    payload: eventPatternsRequests,
  },
] as TcpRequestSchema[];

const name_module = 'RoleAccess Module';
const importers: Importers = {
  controllers: {
    roleAccessHttpController: {
      name: 'RoleAccessHttpController',
      type: RoleAccessHttpController,
      uri_root: `/${process.env.SERVICE_HTTP}/role/access`,
      requests: roleAccessHttpRequests,
    },
    roleAccessHttpTcpController: {
      name: 'RoleAccessHttpTcpController',
      type: RoleAccessHttpTcpController,
      uri_root: `/${process.env.SERVICE_HTTP}/role/access`,
      requests: roleAccessHttpRequests,
    },
    roleAccessTcpController: {
      name: 'RoleAccessTcpController',
      type: RoleAccessTcpController,
      requests: roleAccessTcpRequests,
    },
  },
  services: {
    roleAccessService: {
      name: 'RoleAccessService',
      type: RoleAccessService,
      mock: {
        properties: {
          withCache: false,
        }
      }
    },
  },
  mockDependencies: {
    repositories: [
      {
        type: RoleAccess,
        customMockers: {
          findOne: () => {
            return {
              'id': 'some-role-access-id',
            }
          }
        }
      }
    ]
  },
}

const testSuite = new TestSuite(name_module, importers, false);
testSuite.perform();
