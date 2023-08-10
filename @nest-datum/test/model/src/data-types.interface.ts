/**
 * Description of how TestSuite should generate a random string.
 * @param type should be `string` for this type.
 * @param config rules of the future string.
 * @param config.length string size.
 * @param config.pattern string template of how to generate the string. (
 *  see more in `utils/string-generator.ts` to see how to specify it.
 * )
 * @param config.withDigits should string contain digits.
 * @param config.withSpecialChars should string contain special chars.
 * @param config.withCyrillic should string contain cyrillic chars.
 * @param config.onlyCyrillic should string contain only cyrillic chars(
 *  by default there will be only latin chars.
 * )
 */
type StringValueParam = {
  type: 'string';
  config: {
    length: number;
    pattern: 'any' | string;
    withDigits: boolean;
    withSpecialChars: boolean;
    withCyrillic: boolean;
    onlyCyrillic: boolean;
  };
};

/**
 * Description of how to generate a random number.
 * @param type should be `number` for this type.
 * @param config rules of the future number.
 * @param config.length number size.
 * - Suppose you want a number with size 10,
 * the number generator will generate a number with size 10,
 * so that on each index will be a random number with range from 0 to 9.
 */
type NumberValueParam = {
  type: 'number';
  config: {
    length: number;
  };
};

/**
 * Just a random boolean value.
 * @param type should be `boolean` for this type.
 */
type BooleanValueParam = {
  type: 'boolean';
};

/**
 * Random generated UUID value.
 * @param type should be `uuid` for this type.
 */
type UUIDValueParam = {
  type: 'uuid';
};

/**
 * Unit type for types that describe auto value descriptions for some property.
 */
type AutoValue = 
StringValueParam | 
NumberValueParam | 
BooleanValueParam |
UUIDValueParam;

/**
 * Just a set of types for a custom value for some property.
 */
type CustomValue = string | number | object | boolean;

/**
 * Type for value parameter.
 * @type if you specify `custom`, you need to specify a custom value for value param.
 * if you specify `auto` you should specify an object with descriptions of AutoValue type.
 * @value here you specify a custom value or an object that describes AutoValue type.
 */
type ValueParam = {
  type: 'custom' | 'auto';
  value: CustomValue | AutoValue,
};

export {
  AutoValue,
  CustomValue,
  ValueParam,
  StringValueParam,
  NumberValueParam,
  BooleanValueParam,
};
