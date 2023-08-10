import { random } from "../index";

/**
 * Generate random number with specific length
 * @param config 
 * @returns number.
 */
const generateNumber = (
  config: {
    length: number,
  }
): number => {
  let result = '';

  for (let i = 0; i <= config.length; i++)
    result += random.rnd(0, 9);

  return parseInt(result);
};

export default generateNumber;
