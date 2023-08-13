import utilsJWTCreateHeader from './createHeader';
import utilsJWTCreatePayload from './createPayload';
import utilsJWTCreateSignature from './createSignature';

const generateRefreshToken = (id: string, iat: number = Date.now(), exp = process.env.JWT_REFRESH_TIMEOUT) => {
	const publicString = `${utilsJWTCreateHeader()}.${utilsJWTCreatePayload({
		exp,
		iat,
		id,
	})}`;

	return `${publicString}.${utilsJWTCreateSignature(publicString.trim(), process.env.JWT_SECRET_REFRESH_KEY || process['JWT_SECRET_REFRESH_KEY'])}`;
};

export default generateRefreshToken;
