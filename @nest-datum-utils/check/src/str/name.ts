import utilsCheckStrDescription from './description';

const name = (value) => utilsCheckStrDescription(value) && value.length < 127;

export default name;
