import { MockType, Mocker } from "@nest-datum/test/model"
import { ModelService } from "@nest-datum/model";
import { jestMockWrapper } from "@nest-datum/test/utils";

const defaultTransportMockers = {
  send: jest.fn(request => request),
  create: jest.fn(payload => payload),
  many: jest.fn((payload) => payload),
  drop: jest.fn(payload => payload),
  dropMany: jest.fn(payload => payload),
  connection: jest.fn(() => true),
  sendLog: jest.fn(() => true),
  setStartCacheEntities: jest.fn(() => true),
  startCache: jest.fn(() => true),
  one: jest.fn(payload => payload),
};

function transportServiceMockFactory<T extends ModelService>(
  customMockers: Record<string, Mocker> = {}
): MockType<T> {
  if (customMockers) {
    Object.keys(customMockers).forEach((funcName: string) => {
      customMockers[funcName] = jestMockWrapper(customMockers[funcName]);
    });
  }

  return jest.fn(
    () => ({
      ...defaultTransportMockers,
      ...customMockers,
    })
  )();
}

export default transportServiceMockFactory;
