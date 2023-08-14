import { ModelRemovableService } from '@nest-datum/model-removable';

class Sample {
}

export function ModelSqlRemovableService(Base: any = Sample) {
	class AbstractBase extends ModelRemovableService(Base) {
		readonly removable_properties = [
			'isDeleted',
			'isNotDelete',
		];

		async getManyAllowPreparePropertiesSelect(): Promise<Array<string>> {
			return [ 
				...await super.getManyAllowPreparePropertiesSelect(), 
				...this.removable_properties,
			];
		}

		async getOneAllowPrepareProperties(): Promise<Array<string>> {
			return [
				...await super.getOneAllowPrepareProperties(),
				...this.removable_properties,
			];
		}

		async createAllowPrepareProperties(): Promise<Array<string>> {
			return [ 
				...await super.createAllowPrepareProperties(), 
				...this.removable_properties,
			];
		}

		async updateManyAllowPrepareProperties(): Promise<Array<string>> {
			return [
				...await super.updateManyAllowPrepareProperties(),
				...this.removable_properties,
			];
		}

		async updateOneAllowPrepareProperties(): Promise<Array<string>> {
			return [
				...await super.updateOneAllowPrepareProperties(),
				...this.removable_properties,
			];
		}

		async dropManyAllowPrepareProperties(): Promise<Array<string>> {
			return [
				...await super.dropManyAllowPrepareProperties(),
				...this.removable_properties,
			];
		}
		
		async dropOneAllowPrepareProperties(): Promise<Array<string>> {
			return [
				...await super.dropOneAllowPrepareProperties(),
				...this.removable_properties,
			];
		}

		async dropManyProcess(properties: object): Promise<object> {
			const newProperties = await this.getManyProcess(properties);
			const rows = newProperties['_getManyProcessResult']['rows'];
			let i = 0,
				output = [];

			while (i < rows.length) {
				const model = await this.repository.findOne({
					select: properties['_dropManyPrepareProperties'],
					where: {
						id: rows[i]['id'],
					},
				});

				console.log("MANY MODEL:", model, properties);

				if (model
					&& await this.repository.delete({ id: rows[i]['id'] })) {
					output.push(model);
				}
				i++;
			}
			return { ...properties, _dropManyProcessResult: output };
		}

		async dropOneProcess(properties: object): Promise<object> {
			const model = await this.repository.findOne({
				select: await this.dropManyAllowPrepareProperties(),
				where: {
					id: properties['id'],
				},
			});

			let _dropOneProcessResult = null;

			if (model && !model.isNotDelete) {
				if (model.isDeleted) {
					_dropOneProcessResult = await this.dropProcessForever(properties['id']);
				} else {
					_dropOneProcessResult = await this.dropProcessPrepare(properties['id']);
				}
			}
			
			return await super.updateOneProcess(
				{ 
					...properties, 
					_dropOneProcessResult
				}
			);
		}

		async dropProcessForever(id): Promise<any> {
			return await this.connectionService.query(
				`DELETE FROM ${this.repository.metadata.tableName} WHERE id="${id}"`
			);
		}
	
		async dropProcessPrepare(id: string): Promise<any> {
			await this.repository.save({ id, isDeleted: true });
			return await this.connectionService.query(
				`SELECT * FROM ${this.repository.metadata.tableName} WHERE id="${id}"`
			);
		}
	}

	return AbstractBase
}
