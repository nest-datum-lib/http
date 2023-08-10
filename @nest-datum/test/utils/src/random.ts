/**
 * Generate random number with specific range
 * @param max 
 * @param min 
 * @returns number
 */
export const rnd = (max: number, min: number = 0) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Returns chat at random position
 * @param str string from which a random char will be returned.
 * @returns a random char.
 */
export const randomChar = (str: string): string | never => {
  if (str === undefined) 
    throw new Error('Cannot get random char from undefined!');
  return str.charAt(rnd(str.length - 1, 0));
}
