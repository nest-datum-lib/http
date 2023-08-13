import * as crypto from 'node:crypto';
class Sample {
}

export function ModelTokenController(Base: any = Sample) {
	class AbstractBase extends Base {
		public readonly getManyWithToken: boolean;
		public readonly getOneWithToken: boolean;
		public readonly createWithToken: boolean;
		public readonly updateManyWithToken: boolean;
		public readonly updateOneWithToken: boolean;
		public readonly dropManyWithToken: boolean;
		public readonly dropOneWithToken: boolean;

		async provideToken(properties: object): Promise<object> {
			const secret = process.env?.JWT_SECRET_ACCESS_KEY;
			if (!secret || !secret.length)
				throw new Error('JWT secret is not specified!');

			const token = properties['accessToken'];
			if (
				!token || 
				typeof token === 'undefined' || 
				token === 'null'
			) throw new Error('Token is not specified!');

			let [ header, payload, signature ] = token.split('.');
			if (
				!header ||
				!payload ||
				!signature
			) throw new Error('Token is not valid!');

			const originalSignature = crypto.createHmac(
				'sha256',
				secret
			).update(`${header}.${payload}`).digest();

			if (originalSignature !== signature)
				throw Error('Token is not valid!');
			
			header = JSON.parse(Buffer.from(
				header,
				'base64'
			).toString());
			payload = JSON.parse(Buffer.from(
				payload,
				'base64'
			).toString());
			
			if (
				payload.exp < new Date().getTime()
			) throw new Error('Token is expired!');

			properties['authedUserId'] = {
				header,
				payload,
			};
			
			return properties;
		}

		async validateGetMany(properties: object): Promise<object> {
			return await super.validateGetMany((this.getManyWithToken ?? true)
				? await this.provideToken(properties)
				: properties);
		}

		async validateGetOne(properties: object): Promise<object> {
			return await super.validateGetOne((this.getOneWithToken ?? true)
				? await this.provideToken(properties)
				: properties);
		}

		async validateCreate(properties: object): Promise<object> {
			return await super.validateCreate((this.createWithToken ?? true)
				? await this.provideToken(properties)
				: properties);
		}

		async validateUpdateMany(properties: object): Promise<object> {
			return await super.validateUpdateMany((this.updateManyWithToken ?? true)
				? await this.provideToken(properties)
				: properties);
		}

		async validateUpdateOne(properties: object): Promise<object> {
			return await super.validateUpdateOne((this.updateOneWithToken ?? true)
				? await this.provideToken(properties)
				: properties);
		}

		async validateDropMany(properties: object): Promise<object> {
			return await super.validateDropMany((this.dropManyWithToken ?? true)
				? await this.provideToken(properties)
				: properties);
		}

		async validateDropOne(properties: object): Promise<object> {
			return await super.validateDropOne((this.dropOneWithToken ?? true)
				? await this.provideToken(properties)
				: properties);
		}
	}

	return AbstractBase;
}
