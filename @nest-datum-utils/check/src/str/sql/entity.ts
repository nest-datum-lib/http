import str from '../index';

const entity = (value) => str(value) 
	&& /^[a-zA-Z0-9_]+$/.test(value) 
	&& value.length < 100;

export default entity;
