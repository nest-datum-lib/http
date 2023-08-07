import { RequestBodySchema, CustomValue, AutoValue } from '@nest-datum/test/model';
import { generatorBinds as binds } from '../index';
import { generateAccessToken } from '@nest-datum-common/jwt';

/**
 * Mock request by specific request schema.
 * @param bodySchema 
 * @returns mocked request object
 */
export default function generateRequest(bodySchema: RequestBodySchema) {
  const result = {};

  for (const [key, field] of Object.entries(bodySchema)) {
    if (field.type === 'custom') {
      result[key] = field.value as CustomValue;
    } else if (field.type === 'auto') {
      const autovalue = field.value as unknown as AutoValue;

      if (key === 'accessToken') {
        result[key] = generateAccessToken();
        continue;
      }

      if (key === 'endKey') {
        result[key] = "HAPP_TEST_ENV_KEY";
        continue;
      }

      if (!binds?.[autovalue.type])
        throw new Error(`Unkown type of field in body schema: ${autovalue.type}`);
      result[key] = binds[autovalue.type](
        autovalue?.['config']
      );
    } else throw new Error(`Unkown key type in body schema: ${field.type}`);
  }

  return result;
}
