import { 
	Repository,
	Connection, 
} from 'typeorm';
import { Model } from './model.entity';

export class ModelService {
	protected readonly repository;
	protected readonly connectionService: Connection;

	async getMany(properties: object): Promise<Array<Array<any> | number>> {
		return [];
	}

	async getOne(properties: object): Promise<object> {
		return {};
	}

	async create(properties: object): Promise<object> {
		return {};
	}

	async updateMany(properties: object): Promise<Array<any>> {
		return [];
	}

	async updateOne(properties: object): Promise<object> {
		return {};
	}

	async dropMany(properties: object): Promise<object> {
		return {};
	}

	async dropOne(properties: object): Promise<boolean> {
		return true;
	}
}
