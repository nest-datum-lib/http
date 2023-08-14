import { ModelSqlService } from '@nest-datum/model-sql';
import { ModelSqlCreatorService } from '@nest-datum/model-sql-creator';
import { ModelSqlDatesService } from '@nest-datum/model-sql-dates';
import { ModelSqlManyToOneService } from '@nest-datum/model-sql-many-to-one';
import { AccessService } from '@nest-datum/access';

export class AccessSqlRoleService extends AccessService(ModelSqlDatesService(ModelSqlCreatorService(ModelSqlManyToOneService(ModelSqlService())))) {
	async getManyAllowPreparePropertiesSelect(): Promise<Array<string>> {
		return [ 
			...await super.getManyAllowPreparePropertiesSelect(), 
			'accessId',
			'roleId',
		];
	}

	async getOneAllowPrepareProperties(): Promise<Array<string>> {
		return [ 
			...await super.getOneAllowPrepareProperties(), 
			'accessId',
			'roleId',
		];
	}

	async createAllowPrepareProperties(): Promise<Array<string>> {
		return [ 
			...await super.createAllowPrepareProperties(), 
			'accessId',
			'roleId',
		];
	}

	async updateManyAllowPrepareProperties(): Promise<Array<string>> {
		return [ 
			...await super.updateManyAllowPrepareProperties(), 
			'accessId',
			'roleId',
		];
	}

	async updateOneAllowPrepareProperties(): Promise<Array<string>> {
		return [ 
			...await super.updateOneAllowPrepareProperties(), 
			'accessId',
			'roleId',
		];
	}

	async dropManyAllowPrepareProperties(): Promise<Array<string>> {
		return [ 
			...await super.dropManyAllowPrepareProperties(), 
			'accessId',
			'roleId',
		];
	}

	async dropOneAllowPrepareProperties(): Promise<Array<string>> {
		return [ 
			...await super.dropOneAllowPrepareProperties(), 
			'accessId',
			'roleId',
		];
	}
}
