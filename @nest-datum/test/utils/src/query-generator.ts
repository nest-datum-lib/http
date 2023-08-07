import { RequestQuerySchema } from "@nest-datum/test/model/src/model.interface";
import { generatorBinds as binds } from "../index";
import { CustomValue, AutoValue } from "@nest-datum/test/model";
import { generateAccessToken } from "@nest-datum-common/jwt";

const buildQuery = (key: string, value: CustomValue) => {
  return `${key}=${JSON.stringify(value)}`;
}

/**
 * Generate queries URI by specified query shemas.
 * @param querySchema see RequestQuerySchema type.
 * @returns string that contains generated queries
 */
const generateQueries = (querySchema: RequestQuerySchema): string => {
  let result = [];

  for (const [key, field] of Object.entries(querySchema)) {
    if (field.type === 'custom') {
      result.push(buildQuery(key, field.value));
    } else if (field.type === 'auto') {
      if (key === 'accessToken') {
        result.push(buildQuery(key, generateAccessToken()));
        continue;
      }

      const autovalue = field.value as unknown as AutoValue;
      
      if (!binds?.[autovalue.type])
        throw new Error(`Unkown type of field in query schema: ${autovalue.type}`);
      result.push(buildQuery(key, binds[autovalue.type](
        autovalue?.['config']
      )));
    } else throw new Error(`Unkown key type in query schema: ${field.type}`);
  }
  return `?${result.join('&')}`;
}

export default generateQueries;
