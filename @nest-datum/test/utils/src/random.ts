/**
 * Generate random number with specific range
 * @param max 
 * @param min 
 * @returns number
 */
export const rnd = (max: number, min: number = 0) => Math.abs(
  Math.floor(Math.random() * (max - min))
);

/**
 * Returns chat at random position
 * @param str 
 * @returns string
 */
export const randomChar = (str: string): string | never => {
  if (str === undefined) 
    throw new Error('Cannot get random char from undefined!');
  return str.charAt(rnd(str.length - 1, 0));
}
