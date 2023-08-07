import { random } from '../index';

/**
 * @returns random boolean
 */
const generateBoolean = () => new Boolean(random.rnd(0, 1)).valueOf();

export default generateBoolean;
