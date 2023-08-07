import { random } from '../index';

/**
 * 
 * @param length size of desired string
 * @param pattern how your string should look like
 * @param withDigits should your string contain digits.
 * @param withSpecialChars should your string contain special chars.
 * @returns randomly generated string.
 * 
 * - Special chars consist of !@#$%^&*()[]{}_-=+.;:\/
 * 
 * - Pattern specification:
 * - - s - for any letter char
 * - - d - for any integer char
 * - - x - for any special char
 * - Pattern example:
 * - - sssssxxxdddd
 * - - sxsxsddsds
 * - Use `any` value for pattern if you want to
 * just random string.
 */
const generateString = (
  config: {
    pattern: 'any' | string, 
    length: number,
    withDigits: boolean,
    withSpecialChars: boolean,
    withCyrillic: boolean,
    onlyCyrillic: boolean,
  }
) => {
  if (config.pattern === undefined)
    throw new Error('String pattern is undefined! Expected "any" or pattern.');
  if (config.length === undefined)
    throw new Error('String length is undefined! Expected integer.');

  const alphabet_latin = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const alphabet_cyrillic = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
  const digits = '1234567890';
  const special = `!@#$%^&*()[]{}_-=+.;:\/`;
  let pattern_keys = 's';
  let result = '';

  const available_chars = {
    s: config.onlyCyrillic ? alphabet_cyrillic : alphabet_latin,
  };
  if (!config.onlyCyrillic && config.withCyrillic) 
    available_chars.s = available_chars.s.concat(alphabet_cyrillic);
  if (config.withDigits) {
    available_chars['d'] = digits;
    pattern_keys += 'd';
  }
  if (config.withSpecialChars) {
    available_chars['x'] = special;
    pattern_keys += 'x';
  }

  if (
    config.pattern !== 'any' &&
    !new RegExp(`^[${pattern_keys}]*$`).test(config.pattern)
  ) throw new Error(
    `Invalid pattern: ${config.pattern}! Config: \n${JSON.stringify(config, null, '\t')}`
  );

  if (config.pattern === "any") {
    while (result.length <= config.length) {
      const random_pattern_key = random.randomChar(pattern_keys);
      const available_char = available_chars[random_pattern_key];
      const random1 = random.randomChar(
        available_char
      );
      result += random1;
    }    
  } else {
    for (let i = 0; i < config.pattern.length; i++) {
      const pt_char = config.pattern[i];
      if (!available_chars[pt_char]) 
        throw new Error(`Unkown pattern char: ${pt_char}`)
      if (config.length === result.length) break;
      result += random.randomChar(
        available_chars[pt_char]
      );
    }
  }

  return result;
}

export default generateString;
