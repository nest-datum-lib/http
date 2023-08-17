import { 
	Exception,
	ExceptionError,
	ExceptionForbidden,
	ExceptionUnauthorized,
	ExceptionBadRequest,
	ExceptionNotFound, 
} from '@nest-datum/exception';
import { 
	exists as utilsCheckExists,
	strArr as utilsCheckStrArr,
	strArrFilled as utilsCheckStrArrFilled,
	strObj as utilsCheckStrObj,
	strObjFilled as utilsCheckStrObjFilled,
	strId as utilsCheckStrId, 
} from '@nest-datum-utils/check';

class Sample {
}

export function ModelController(Base: any = Sample) {
	class AbstractBase extends Base {
		public readonly service;

		constructor(...properties) {
			super(...properties);

			this.Exception = Exception();
			this.ExceptionError = ExceptionError();
			this.ExceptionForbidden = ExceptionForbidden();
			this.ExceptionUnauthorized = ExceptionUnauthorized()
			this.ExceptionBadRequest = ExceptionBadRequest(Exception());
			this.ExceptionNotFound = ExceptionNotFound();
		}

		async validateGetMany(properties: object): Promise<object> {
			const offset = properties['offset'] ?? properties['page'];
			const output = {
				select: [],
				join: [],
				groupBy: [],
				orderBy: [],
				where: {},
			};

			if (utilsCheckExists(offset)
				&& !((output['offset'] = Number(offset)) >= 1
					|| Number(offset) <= 99999999)) {
				throw new this.ExceptionBadRequest(`Property "offset" "${offset}" is bad format.`);
			}
			if (utilsCheckExists(properties['limit'])
				&& !((output['limit'] = Number(properties['limit'])) >= 1
					|| Number(properties['limit']) <= 99999999)) {
				throw new this.ExceptionBadRequest(`Property "limit" "${properties['limit']}" is bad format.`);
			}
			if (utilsCheckExists(properties['select'])) {
				if (!utilsCheckStrArr(properties['select'])) {
					throw new this.ExceptionBadRequest(`Property "select" "${properties['select']}" is bad format.`);
				}
				output['select'] = JSON.parse(properties['select']);
			}
			if (utilsCheckExists(properties['join'])) {
				if (
					!utilsCheckStrObj(properties['join'])
					&& !utilsCheckStrObjFilled(properties['join'])
				) {
					throw new this.ExceptionBadRequest(`Property "join" "${properties['join']}" is bad format.`);
				}
				output['join'] = JSON.parse(properties['join']);
			}
			if (utilsCheckExists(properties['groupBy'])) {
				if (!utilsCheckStrArr(properties['groupBy'])) {
					throw new this.ExceptionBadRequest(`GroupBy value "${properties['groupBy']}" is bad format.`);
				}
				output['groupBy'] = JSON.parse(properties['groupBy']);
			}
			if (utilsCheckExists(properties['orderBy'])) {
				if (!utilsCheckStrObj(properties['orderBy'])) {
					console.log("properties['orderBy']", utilsCheckStrObj(properties['orderBy']), properties['orderBy'][0], properties['orderBy'][properties['orderBy'].length - 1]);
					throw new this.ExceptionBadRequest(`Property "orderBy" "${properties['orderBy']}" is bad format.`);
				}
				console.log(properties['orderBy']);
				output['orderBy'] = JSON.parse(properties['orderBy']);
			}
			if (utilsCheckExists(properties['where'])) {
				if (!utilsCheckStrArr(properties['where'])
					&& !utilsCheckStrObj(properties['where'])) {
					throw new this.ExceptionBadRequest(`Property "where" "${properties['where']}" is bad format.`);
				}
				output['where'] = JSON.parse(properties['where']);
			}
			return output;
		}

		async validateGetOne(properties: object): Promise<object> {
			const output = {
				id: properties['id'],
				select: [],
				join: [],
				where: {},
			};

			if (!utilsCheckStrId(output['id'])) {
				throw new this.ExceptionBadRequest(`Property "id" "${output['id']}" is bad format.`);
			}
			if (utilsCheckExists(properties['select'])) {
				if (!utilsCheckStrArr(properties['select'])) {
					throw new this.ExceptionBadRequest(`Property "select" "${properties['select']}" is bad format.`);
				}
				output['select'] = JSON.parse(properties['select']);
			}
			if (utilsCheckExists(properties['join'])) {
				if (!utilsCheckStrArr(properties['join'])) {
					throw new this.ExceptionBadRequest(`Property "join" "${properties['join']}" is bad format.`);
				}
				output['join'] = JSON.parse(properties['join']);
			}
			if (utilsCheckExists(properties['where'])) {
				if (!utilsCheckStrArr(properties['where'])
					&& !utilsCheckStrObj(properties['where'])) {
					throw new this.ExceptionBadRequest(`Property "where" "${properties['where']}" is bad format.`);
				}
				output['where'] = JSON.parse(properties['where']);
			}
			return properties;
		}

		async validateCreateMany(properties: object): Promise<object> {
			console.log(properties)
			if (
				!utilsCheckExists(properties['body']) ||
				!utilsCheckStrArrFilled(properties['body'])
			)
				throw new this.ExceptionBadRequest(`Property "body" "${properties['body']}" is bad format.`);
			return {
				...properties,
				body: JSON.parse(properties['body']),
			};
		}

		async validateCreateOne(properties: object): Promise<object> {
			if (utilsCheckExists(properties['id'])
				&& !utilsCheckStrId(properties['id'])) {
				throw new this.ExceptionBadRequest(`Property "id" "${properties['id']}" is bad format.`);
			}
			return properties;
		}

		async validateUpdateMany(properties: object): Promise<object> {
			if (!utilsCheckExists(properties['body'])
				|| !utilsCheckStrObjFilled(properties['body'])) {
				throw new this.ExceptionBadRequest(`Property "body" "${properties['body']}" is bad format.`);
			}
			return {
				...await this.validateGetMany(properties),
				body: JSON.parse(properties['body']),
			};
		}

		async validateUpdateOne(properties: object): Promise<object> {
			if (!utilsCheckStrId(properties['id'])) {
				throw new this.ExceptionBadRequest(`Property "id" "${properties['id']}" is bad format.`);
			}
			if (utilsCheckExists(properties['newId'])
				&& !utilsCheckStrId(properties['newId'])) {
				throw new this.ExceptionBadRequest(`Property "newId" "${properties['newId']}" is bad format.`);
			}
			return properties;
		}

		async validateDropMany(properties: object): Promise<object> {
			return await this.validateGetMany(properties);
		}

		async validateDropOne(properties: object): Promise<object> {
			if (!utilsCheckStrId(properties['id'])) {
				throw new this.ExceptionBadRequest(`Property "id" "${properties['id']}" is bad format.`);
			}
			return properties;
		}

		async getMany(properties: object): Promise<object> {
			try {
				return await this.service.getMany(await this.validateGetMany(properties));
			}
			catch (err) {
				console.error(err);
				throw new this.ExceptionError(err.message);
			}
		}

		async getOne(id: string, properties: object): Promise<object> {
			try {
				return await this.service.getOne(await this.validateGetOne({ ...properties, id }));
			}
			catch (err) {
				throw new this.ExceptionError(err.message);
			}
		}

		async createMany(properties: object): Promise<object> {
			try {
				return this.service.createMany(await this.validateCreateMany(properties));
			} catch (err) {
				throw new this.ExceptionError(err.message);
			}
		}

		async create(properties: object): Promise<object> {
			try {
				return await this.service.create(await this.validateCreateOne(properties));
			}
			catch (err) {
				throw new this.ExceptionError(err.message);
			}
		}

		async updateMany(properties: object): Promise<object> {
			try {
				return await this.service.updateMany(await this.validateUpdateMany(properties));
			}
			catch (err) {
				console.log("update err:", err);
				throw new this.ExceptionError(err.message);
			}
		}

		async updateOne(id: string, properties: object): Promise<object> {
			try {
				return await this.service.updateOne(await this.validateUpdateOne({ ...properties, id, newId: properties['id'] }));
			}
			catch (err) {
				throw new this.ExceptionError(err.message);
			}
		}

		async dropMany(properties: object): Promise<object> {
			try {
				return await this.service.dropMany(await this.validateDropMany(properties));
			}
			catch (err) {
				throw new this.ExceptionError(err.message);
			}
		}

		async dropOne(id: string, properties: object): Promise<object> {
			try {
				return await this.service.dropOne(await this.validateDropOne({...properties, id}));
			}
			catch (err) {
				throw new this.ExceptionError(err.message);
			}
		}
	}

	return AbstractBase;
}
