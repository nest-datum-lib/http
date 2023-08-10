import { Mocker, MockTargetFunction } from "@nest-datum/test/model";

/**
 * Wraps some function to a jest mock function.
 * If non-function will be given as a mocker, it will be just returned.
 * @param mocker 
 * @returns 
 */
const jestMockWrapper = (mocker: Mocker) => {
  if (typeof mocker === 'function') {
    return jest.fn(mocker as MockTargetFunction);
  } else return mocker;
};

export default jestMockWrapper;
