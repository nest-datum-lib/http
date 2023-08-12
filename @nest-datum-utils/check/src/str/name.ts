import description from './description.js';

const name = (value) => description(value) && value.length < 127;

export default name;
