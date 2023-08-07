const defaultBodyParams = {
  accessToken: {
    type: 'auto',
    value: 'string',
  },
  envKey: {
    type: 'custom',
    value: 'HAPP_TEST_ENV',
  },
  id: {
    type: 'auto',
    value: {
      type: 'uuid',
    },
  },
};

export {defaultBodyParams};
