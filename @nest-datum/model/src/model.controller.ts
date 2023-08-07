import { ExceptionBadRequest } from '@nest-datum/exception';
import { 
	exists as utilsCheckExists,
	strArr as utilsCheckStrArr,
	strObj as utilsCheckStrObj, 
} from '@nest-datum-utils/check';

class Sample {
}

export function ModelController(Base: any = Sample) {
	class AbstractBase extends Base {
		public readonly service;

		async errorHandler(callback: Function) {
			return await callback();
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
				throw new (ExceptionBadRequest())(`Offset value "${offset}" is bad format.`);
			}
			if (utilsCheckExists(properties['limit'])
				&& !((output['offset'] = Number(properties['limit'])) >= 1
					|| Number(properties['limit']) <= 99999999)) {
				throw new (ExceptionBadRequest())(`Limit value "${properties['limit']}" is bad format.`);
			}
			if (utilsCheckExists(properties['select'])) {
				if (!utilsCheckStrArr(properties['select'])) {
					throw new (ExceptionBadRequest())(`Select value "${properties['select']}" is bad format.`);
				}
				output['select'] = JSON.parse(properties['select']);
			}
			if (utilsCheckExists(properties['join'])) {
				if (!utilsCheckStrArr(properties['join'])) {
					throw new (ExceptionBadRequest())(`Join value "${properties['join']}" is bad format.`);
				}
				output['join'] = JSON.parse(properties['join']);
			}
			if (utilsCheckExists(properties['groupBy'])) {
				if (!utilsCheckStrArr(properties['groupBy'])) {
					throw new (ExceptionBadRequest())(`GroupBy value "${properties['groupBy']}" is bad format.`);
				}
				output['groupBy'] = JSON.parse(properties['groupBy']);
			}
			if (utilsCheckExists(properties['orderBy'])) {
				if (!utilsCheckStrArr(properties['orderBy'])) {
					throw new (ExceptionBadRequest())(`OrderBy value "${properties['orderBy']}" is bad format.`);
				}
				output['orderBy'] = JSON.parse(properties['orderBy']);
			}
			if (utilsCheckExists(properties['where'])) {
				if (!utilsCheckStrArr(properties['where'])
					&& !utilsCheckStrObj(properties['where'])) {
					throw new (ExceptionBadRequest())(`Where value "${properties['where']}" is bad format.`);
				}
				output['where'] = JSON.parse(properties['where']);
			}
			return output;
		}

		async validateGetOne(properties: object): Promise<object> {
			return properties;
		}

		async validateCreate(properties: object): Promise<object> {
			return properties;
		}

		async validateUpdateMany(properties: object): Promise<object> {
			return properties;
		}

		async validateUpdateOne(properties: object): Promise<object> {
			return properties;
		}

		async validateDropMany(properties: object): Promise<object> {
			return properties;
		}

		async validateDropOne(properties: object): Promise<object> {
			return properties;
		}

		async getMany(properties: object): Promise<object> {
			return await this.errorHandler(async () => await this.service.getMany(await this.validateGetMany(properties)));
		}

		async getOne(id: string, properties: object): Promise<object> {
			return await this.errorHandler(async () => await this.service.getOne(await this.validateGetOne({ ...properties, id })));
		}

		async create(properties: object): Promise<object> {
			return await this.errorHandler(async () => await this.service.create(await this.validateCreate(properties)));
		}

		async updateMany(properties: object): Promise<object> {
			return await this.errorHandler(async () => await this.service.updateMany(await this.validateUpdateMany(properties)));
		}

		async updateOne(id: string, properties: object): Promise<object> {
			return await this.errorHandler(async () => await this.service.updateOne(await this.validateUpdateOne({ ...properties, id })));
		}

		async dropMany(properties: object): Promise<object> {
			return await this.errorHandler(async () => await this.service.dropMany(await this.validateDropMany(properties)));
		}

		async dropOne(id: string, properties: object): Promise<object> {
			return await this.errorHandler(async () => await this.service.dropOne(await this.validateDropOne({ ...properties, id })));
		}
	}

	return AbstractBase;
}
