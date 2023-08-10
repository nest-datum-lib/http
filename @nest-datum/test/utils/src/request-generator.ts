import { RequestBodySchema, CustomValue, AutoValue, ValueParam } from '@nest-datum/test/model';
import { generatorBinds as binds } from '../index';
import { generateAccessToken } from '@nest-datum-common/jwt';

/**
 * Mock request by specific request schema.
 * @param bodySchema 
 * @returns mocked request object
 */
export default function generateRequest(bodySchema: RequestBodySchema) {
  const result = {};

  const callback = (key: string, field: ValueParam) => {
    const temp_result = {};

    if (field.type === 'custom') {
      temp_result[key] = field.value as CustomValue;
    } else if (field.type === 'auto') {
      const autovalue = field.value as unknown as AutoValue;

      if (key === 'accessToken') {
        temp_result[key] = generateAccessToken();
        return temp_result;
      }

      if (key === 'envKey') {
        temp_result[key] = "HAPP_TEST_ENV_KEY";
        return temp_result;
      }

      if (!binds?.[autovalue.type])
        throw new Error(`Unkown type of field in body schema: ${autovalue.type}`);
      
      temp_result[key] = binds[autovalue.type](
        autovalue?.['config']
      );
    } else throw new Error(`Unkown key type in body schema: ${field.type}`);
    
    return temp_result;
  }

  for (const [key, field] of Object.entries(bodySchema)) {
    if (Array.isArray(field)) {
      const fields = [];
      
      for (const param of field)
        fields.push(callback('temp_key', param)['temp_key']);

      result[key] = fields;
    } else {
      result[key] = callback(key, field)[key];
    }
  }

  return result;
}
