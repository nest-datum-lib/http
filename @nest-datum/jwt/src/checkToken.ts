import { objFilled as utilsCheckObjFilled } from '@nest-datum-utils/check';
import utilsJWTCreateHeader from './createHeader';
import utilsJWTCreatePayload from './createPayload';
import utilsJWTCreateSignature from './createSignature';

const checkToken = (token: string, key: string = process.env.JWT_SECRET_ACCESS_KEY, payload: any = null) => {
	if (!token || token === 'undefined' || token === 'null') {
		return false;
	}
	if (!utilsCheckObjFilled(payload)) {
		payload = JSON.parse(String(Buffer.from((String(token).split('.'))[1], 'base64')));
	}
	const publicString = `${utilsJWTCreateHeader()}.${utilsJWTCreatePayload(payload)}`;
	const recoveredToken = `${publicString}.${utilsJWTCreateSignature(publicString.trim(), key)}`;

	if (token === recoveredToken
		/*&& (Number(payload['iat']) + Number(payload['exp'])) >= Date.now()*/) {
		return payload;
	}
	// return null;
	return payload; // FOR DEVELOP
};

export default checkToken;
