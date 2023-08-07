import generateRequest from "./src/request-generator";
import generateQueries from "./src/query-generator";
import generateString from "./src/string-generator";
import generateNumber from "./src/number-generator";
import generateBoolean from "./src/boolean-generator";
import * as random from "./src/random";
import { randomUUID } from "crypto";
import jestMockWrapper from "./src/jest-mock-wrapper";

const generatorBinds = {
  'string': generateString,
  'number': generateNumber,
  'boolean': generateBoolean,
  'uuid': randomUUID,
};

export {
  generatorBinds,
  generateRequest,
  generateQueries,
  generateString,
  generateNumber,
  generateBoolean,
  random,
  jestMockWrapper,
};
