import { RequestQuerySchema } from "@nest-datum/test/model/src/model.interface";
import { generatorBinds as binds } from "../index";
import { CustomValue, AutoValue, ValueParam } from "@nest-datum/test/model";
import { generateAccessToken } from "@nest-datum-common/jwt";

const buildQuery = (key: string, value: CustomValue | CustomValue[]) => {
  return String(key) + '=' + JSON.stringify(value);
}

/**
 * Generate queries URI by specified query shemas.
 * @param querySchema see RequestQuerySchema type.
 * @returns string that contains generated queries.
 */
const generateQueries = (querySchema: RequestQuerySchema): string => {
  let result = [];

  const callback = (key: string, field: ValueParam) => {
    if (field.type === 'custom') {
      return field.value;
    } else if (field.type === 'auto') {
      if (key === 'accessToken') {
        return generateAccessToken();
      }

      if (key === 'envKey') {
        return "HAPP_TEST_ENV_KEY";
      }

      const autovalue = field.value as unknown as AutoValue;
      
      if (!binds?.[autovalue.type])
        throw new Error(`Unkown type of field in query schema: ${autovalue.type}`);
      
      return binds[autovalue.type](
        autovalue?.['config']
      );
    } else throw new Error(`Unkown key type in query schema: ${field.type}`);
  }

  for (const [key, field] of Object.entries(querySchema)) {
    if (Array.isArray(field)) {
      const fields = [];
      for (const param of field) 
        fields.push(callback(key, param));
      result.push(buildQuery(key, fields));
    } else {
      result.push(buildQuery(key, callback(key, field)));
    }
  }

  const final = '?' + result.join('&');
  return final;
}

export default generateQueries;
