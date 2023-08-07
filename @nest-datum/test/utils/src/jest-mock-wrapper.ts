import { MockTargetFunction } from "@nest-datum/test/model";

const jestMockWrapper = (mockFunc: MockTargetFunction) => jest.fn(mockFunc);

export default jestMockWrapper;
