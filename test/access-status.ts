import { TestSuite } from '@nest-datum/test';
import { 
  Importers, 
  HttpRequestSchema,
  TcpRequestSchema, 
  ValueParam, 
} from '@nest-datum/test/model';

import { SettingHttpController } from '../src/api/setting/setting-http.controller';
import { SettingHttpTcpController } from '../src/api/setting/setting-http-tcp.controller';
import { SettingTcpController } from '../src/api/setting/setting-tcp.controller';
import { SettingService } from '../src/api/setting/setting.service';
import { Setting } from '../src/api/setting/setting.entity';
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

const settingHttpRequests = [
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

const settingTcpRequests = [
  {
    type: 'tcp',
    message_pattern: {
      cmd: 'setting.many',
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
      cmd: 'setting.one',
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
    event_pattern: 'setting.drop',
    payload: eventPatternsRequests,
    expectedResponse: true,
  },
  {
    type: 'tcp',
    event_pattern: 'setting.dropMany',
    payload: eventPatternsRequests,
  },
  {
    type: 'tcp',
    event_pattern: 'setting.create',
    payload: eventPatternsRequests,
  },
  {
    type: 'tcp',
    event_pattern: 'setting.update',
    payload: eventPatternsRequests,
  }
] as TcpRequestSchema[];

const name_module = 'AccessStatus Module';
const importers: Importers = {
  controllers: {
    settingHttpController: {
      name: 'SettingHttpController',
      type: SettingHttpController,
      uri_root: `/${process.env.SERVICE_HTTP}/setting`,
      requests: settingHttpRequests,
    },
    settingHttpTcpController: {
      name: 'SettingHttpTcpController',
      type: SettingHttpTcpController,
      uri_root: `/${process.env.SERVICE_HTTP}/setting`,
      requests: settingHttpRequests,
    },
    settingTcpController: {
      name: 'SettingTcpController',
      type: SettingTcpController,
      requests: settingTcpRequests,
    },
  },
  services: {
    settingService: {
      name: 'SettingService',
      type: SettingService,
    },
  },
  mockDependencies: {
    repositories: [
      {
        type: Setting,
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
