import utilsJWTCreateHeader from './createHeader';
import utilsJWTCreatePayload from './createPayload';
import utilsJWTCreateSignature from './createSignature';

const generateAccessToken = (data: object = {}, iat: number = Date.now(), exp = process.env.JWT_ACCESS_TIMEOUT) => {
	const publicString = `${utilsJWTCreateHeader()}.${utilsJWTCreatePayload({
		exp,
		iat,
		...data,
	})}`;

	return `${publicString}.${utilsJWTCreateSignature(publicString.trim(), process.env.JWT_SECRET_ACCESS_KEY || process['JWT_SECRET_ACCESS_KEY'])}`;
};

export default generateAccessToken;
