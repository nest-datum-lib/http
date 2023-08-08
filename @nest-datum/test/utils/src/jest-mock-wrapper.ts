import { Mocker, MockTargetFunction } from "@nest-datum/test/model";

const jestMockWrapper = (mocker: Mocker) => {
  if (typeof mocker === 'function') {
    return jest.fn(mocker as MockTargetFunction);
  } else return mocker;
};

export default jestMockWrapper;
