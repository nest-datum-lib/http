import { ModelDatesService } from '@nest-datum/model-dates';

class Sample {
}

export function ModelSqlDatesService(Base: any = Sample) {
	class AbstractBase extends ModelDatesService(Base) {
		public getManyAllowPreparePropertiesSelectDatesOn: boolean;
		public getManyAllowPreparePropertiesSelectOrderByColumn: string = 'createdAt';
		public getManyAllowPreparePropertiesSelectOrderByValue: string = 'DESC';

		async getManyAllowPreparePropertiesSelect(): Promise<Array<string>> {
			return [ 
				...await super.getManyAllowPreparePropertiesSelect(), 
				...(this.getManyAllowPreparePropertiesSelectDatesOn === true)
					? [ 'createdAt', 'updatedAt' ]
					: [],
			];
		}

		async getManyPreparePropertiesOrderBy(properties: object): Promise<string> {
			return await super.getManyPreparePropertiesOrderBy({ 
				...properties, 
				orderBy: { 
					...properties['orderBy'], 
					...(this.getManyAllowPreparePropertiesSelectDatesOn
						&& (await this.getManyAllowPreparePropertiesSelect()).includes(this.getManyAllowPreparePropertiesSelectOrderByColumn)
						&& ((this.getManyAllowPreparePropertiesSelectOrderByValue = this.getManyAllowPreparePropertiesSelectOrderByValue.toUpperCase()) === 'DESC'
							|| (this.getManyAllowPreparePropertiesSelectOrderByValue = this.getManyAllowPreparePropertiesSelectOrderByValue.toUpperCase()) === 'ASC'))
						? { [this.getManyAllowPreparePropertiesSelectOrderByColumn]: this.getManyAllowPreparePropertiesSelectOrderByValue }
						: {},
				}, 
			});
		}

		async createAllowPrepareProperties(): Promise<Array<string>> {
			return [ 
				...await super.createAllowPrepareProperties(), 
				...(this.createAllowPreparePropertiesDatesOn === true)
					? [ 'createdAt', 'updatedAt' ]
					: [],
			];
		}
	}

	return AbstractBase;
}
