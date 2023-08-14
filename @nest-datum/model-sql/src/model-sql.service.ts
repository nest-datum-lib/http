import { Connection } from 'typeorm';
import { ModelService } from '@nest-datum/model';
import {
	objFilled as utilsCheckObjFilled,
	arrFilled as utilsCheckArrFilled,
	strId as utilsCheckStrId,
	strFilled as utilsCheckStrFilled,
	strSqlEntity as utilsCheckStrSqlEntity,
	numericInt as utilsCheckNumericInt,
} from '@nest-datum-utils/check';

class Sample {
}

export function ModelSqlService(Base: any = Sample) {
	class AbstractBase extends ModelService(Base) {
		public readonly repository;
		public readonly connectionService: Connection;
		public readonly getManySelectWithPrefix: boolean;
		public readonly getManyOrderByDefault: object;
		public readonly getManyLimitDefault: number = 20;

		/**
		 * Concatenate strings from prepared "getMany" properties for query rows.
		 * @param {object} properties
		 * @param {object} sqlQueryBuilderProperties
		 * @return {Promise<string>}
		 */
		async getManyListQueryString(properties: object, sqlQueryBuilderProperties: object): Promise<string> {
			return ([
				`SELECT ${sqlQueryBuilderProperties['select']}`,
				`FROM ${this.repository.metadata.tableName}`,
				...sqlQueryBuilderProperties['join']
					? [ sqlQueryBuilderProperties['join'] ]
					: [],
				...sqlQueryBuilderProperties['where']
					? [ `WHERE \n\t${sqlQueryBuilderProperties['where']}` ]
					: [],
				...sqlQueryBuilderProperties['groupBy']
					? [ `GROUP BY \n\t${sqlQueryBuilderProperties['groupBy']}` ]
					: [],
				...sqlQueryBuilderProperties['orderBy']
					? [ `ORDER BY \n\t${sqlQueryBuilderProperties['orderBy']}` ]
					: [],
				...(sqlQueryBuilderProperties['limit']
					|| sqlQueryBuilderProperties['offset'])
					? [ `LIMIT ${sqlQueryBuilderProperties['offset'] ? `${sqlQueryBuilderProperties['offset']},` : ''} ${sqlQueryBuilderProperties['limit'] || this.getManyLimitDefault}` ]
					: [],
			]).join(`\n`);
		}

		/**
		 * Concatenate strings from prepared "getMany" properties for query total value.
		 * @param {object} properties
		 * @param {object} sqlQueryBuilderProperties
		 * @return {Promise<string>}
		 */
		async getManyTotalQueryString(properties: object, sqlQueryBuilderProperties: object): Promise<string> {
			return ([
				`SELECT COUNT(DISTINCT \`${this.repository.metadata.tableName}\`.\`id\`) AS \`total\`${sqlQueryBuilderProperties['select'] !== '*' ? `, ${sqlQueryBuilderProperties['select']}` : ''}`,
				`FROM ${this.repository.metadata.tableName}`,
				...sqlQueryBuilderProperties['join']
					? [ sqlQueryBuilderProperties['join'] ]
					: [],
				...sqlQueryBuilderProperties['where']
					? [ `WHERE \n\t${sqlQueryBuilderProperties['where']}` ]
					: [],
				...sqlQueryBuilderProperties['groupBy']
					? [ `GROUP BY \n\t${sqlQueryBuilderProperties['groupBy']}` ]
					: [],
				...sqlQueryBuilderProperties['orderBy']
					? [ `ORDER BY \n\t${sqlQueryBuilderProperties['orderBy']}` ]
					: [],
			]).join(`\n`);
		}

		/**
		 * List of allowed fields that the client can query from database by select.
		 * @return {Promise<Array<string>>}
		 */
		async getManyAllowPreparePropertiesSelect(): Promise<Array<string>> {
			return [ 'id' ];
		}

		/**
		 * Provide "SELECT" property to database query.
		 * @param {object} properties
		 * @return {Promise<string>}
		 */
		async getManyPreparePropertiesSelect(properties: object): Promise<string> {
			const columnsSelectRequest = properties['select'] || [];
			const columnsSelectAllow = await this.getManyAllowPreparePropertiesSelect();
			const columnsJoinAllow = await this.getManyAllowPreparePropertiesJoin();

			return (columnsSelectRequest.length <= 0)
				? '*'
				: (() => {
					const columnsSelectAllowFiltered = columnsSelectRequest.filter((column) => columnsSelectAllow.indexOf(column) >= -1);
					let i = 0,
						output = [],
						withPrefix = this.getManySelectWithPrefix;

					if (!withPrefix) {
						while (i < columnsSelectAllowFiltered.length) {
							const column = columnsSelectAllowFiltered[i];
							const columnSplit = column.split('.');

							if (columnSplit.length === 2
								&& utilsCheckStrSqlEntity(columnSplit[0])
								&& utilsCheckStrSqlEntity(columnSplit[1])) {
								withPrefix = true;
							}
							i++;
						}
					}
					i = 0;

					while (i < columnsSelectAllowFiltered.length) {
						const column = columnsSelectAllowFiltered[i];
						const columnSplit = column.split('.');

						if (columnSplit.length === 2
							&& utilsCheckStrSqlEntity(columnSplit[0])
							&& utilsCheckStrSqlEntity(columnSplit[1])) {
							output.push(`\`${columnSplit[0]}\`.\`${columnSplit[1]}\` AS \`${columnSplit[0]}${(columnSplit[1].charAt(0).toUpperCase() + columnSplit[1].slice(1))}\``);
						}
						else if (columnSplit.length === 1) {
							let columnProcessed = column;

							if (withPrefix) {
								columnProcessed = `${this.repository.metadata.tableName}${(column.charAt(0).toUpperCase() + column.slice(1))}`;
							}
							output.push(`\`${this.repository.metadata.tableName}\`.\`${columnSplit[0]}\` AS \`${columnProcessed}\``);
						}
						i++;
					}
					return output.join(`,\n`);
				})();
		}

		/**
		 * List of allowed fields that the client can query from database by join.
		 * @return {Promise<Array<string>>}
		 */
		async getManyAllowPreparePropertiesJoin(): Promise<Array<string>> {
			return [];
		}

		/**
		 * Provide "JOIN" property to database query.
		 * @param {object} properties
		 * @return {Promise<string>}
		 */
		async getManyPreparePropertiesJoin(properties: object): Promise<string> {
			const whereRequest = properties['where'];
			const joinRequest = properties['join'] || {};
			const joinAllow = await this.getManyAllowPreparePropertiesJoin();
			let key,
				output = [];

			for (key in joinRequest) {
				if (joinAllow.includes(key)) {
					const value = joinRequest[key];
					const valueSplit = value.split('=');

					output.push(`LEFT JOIN \`${key}\`\nON \`${valueSplit[0]
						.split('.')
						.join(`\`.\``)}\` = \`${valueSplit[1]
						.split('.')
						.join(`\`.\``)}\``);
				}
			}
			return output.join(`\n`);
		}

		/**
		 * Provide group string by "AND" operator to "WHERE" property in database query string.
		 * @param {object} allProperties
		 * @return {Promise<Function>}
		 */
		async getManyPreparePropertiesWhereGroupAnd(allProperties: object): Promise<Function> {
			return async (whereProperties: object): Promise<string> => {
				let column,
					output = [];

				for (column in whereProperties) {
					const value = whereProperties[column];

					if (utilsCheckObjFilled(value)) {
						output.push(`(${await (await this.getManyPreparePropertiesWhereGroupAnd(allProperties))(value)})`);
					}
					else if (utilsCheckArrFilled(value)) {
						output.push(`(${await (await this.getManyPreparePropertiesWhereGroupOr(allProperties))(value)})`);
					}
					else if (utilsCheckStrFilled(value)) {
						output.push(value);
					}
				}
				return output.join(` AND `);
			};
		}

		/**
		 * Provide group string by "OR" operator to "WHERE" property in database query string.
		 * @param {object} allProperties
		 * @return {Promise<Function>}
		 */
		async getManyPreparePropertiesWhereGroupOr(allProperties: object): Promise<Function> {
			return async (whereProperties: Array<any>): Promise<string> => {
				let i = 0,
					output = [];

				while (i < whereProperties.length) {
					const value = whereProperties[i];

					if (utilsCheckObjFilled(value)) {
						output.push(`(${await (await this.getManyPreparePropertiesWhereGroupAnd(allProperties))(value)})`);
					}
					else if (utilsCheckArrFilled(value)) {
						output.push(`(${await (await this.getManyPreparePropertiesWhereGroupOr(allProperties))(value)})`);
					}
					else if (utilsCheckStrFilled(value)) {
						output.push(value);
					}
					i++;
				}
				return output.join(` OR `);
			};
		}

		/**
		 * Provide "WHERE" property to database query.
		 * @param {object} properties
		 * @return {Promise<string>}
		 */
		async getManyPreparePropertiesWhere(properties: object): Promise<string> {
			if (utilsCheckObjFilled(properties['where'])) {
				return await (await this.getManyPreparePropertiesWhereGroupAnd(properties))(properties['where']);
			}
			return '';
		}

		/**
		 * List of allowed fields that the client can query from database by order.
		 * @return {Promise<Array<string>>}
		 */
		async getManyAllowPreparePropertiesOrderBy(): Promise<Array<string>> {
			return [];
		}

		/**
		 * Provide "ORDER BY" property to database query.
		 * @param {object} properties
		 * @return {Promise<string>}
		 */
		async getManyPreparePropertiesOrderBy(properties: object): Promise<string> {
			const orderByRequest = properties['orderBy'] || {};
			const orderByAllow = await this.getManyAllowPreparePropertiesOrderBy();
			const joinRequest = properties['join'] || {};
			const joinAllow = await this.getManyAllowPreparePropertiesJoin();
			let key,
				output = [];

			for (key in orderByRequest) {
				const value = String(orderByRequest[key]).toUpperCase();

				if (orderByAllow.includes(key)
					&& (value === 'DESC'
						|| value === 'ASC')) {
					const keySplit = key.split('.');

					if (keySplit.length === 2
						&& (keySplit[0] === this.repository.metadata.tableName
							|| (joinAllow.includes(keySplit[0]))
								&& joinRequest.includes(keySplit[0]))) {
						output.push(`\n\`${keySplit[0]}\`.\`${keySplit[1]}\` ${value}`);
					}
					else if (keySplit.length === 1) {
						output.push(`\`${keySplit[0]}\` ${value}`);
					}
				}
			}
			return output.join(`\n,`);
		}

		/**
		 * List of allowed fields that the client can query from database by group.
		 * @return {Promise<Array<string>>}
		 */
		async getManyAllowPreparePropertiesGroupBy(): Promise<Array<string>> {
			return [];
		}

		/**
		 * Provide "GROUP BY" property to database query.
		 * @param {object} properties
		 * @return {Promise<string>}
		 */
		async getManyPreparePropertiesGroupBy(properties: object): Promise<string> {
			const groupByRequest = properties['groupBy'] || [];
			const groupByAllow = await this.getManyAllowPreparePropertiesGroupBy();
			const joinRequest = properties['join'] || {};
			const joinAllow = await this.getManyAllowPreparePropertiesJoin();
			let key,
				output = [];

			for (key in groupByRequest) {
				if (groupByAllow.includes(key)
					&& groupByRequest.includes(key)) {
					const keySplit = key.split('.');

					if (keySplit.length === 2
						&& (keySplit[0] === this.repository.metadata.tableName
							|| (joinAllow.includes(keySplit[0])
								&& joinRequest.includes(keySplit[0])))) {
						output.push(`\n\t\`${keySplit[0]}\`.\`${keySplit[1]}\``);
					}
				}
			}
			return output.join(`,`);
		}

		/**
		 * Provide "offset" property to database query.
		 * @param {object} properties
		 * @return {Promise<string>}
		 */
		async getManyPreparePropertiesOffset(properties: object): Promise<string> {
			const offset = properties['offset'] ?? properties['page'];
			const limit = utilsCheckNumericInt(properties['limit'])
				? properties['limit']
				: 0;

			return `${(offset > 0) ? ((offset - 1) * limit) : 0}`;
		}

		/**
		 * Provide "limit" property to database query.
		 * @param {object} properties
		 * @return {Promise<string>}
		 */
		async getManyPreparePropertiesLimit(properties: object): Promise<string> {
			return utilsCheckNumericInt(properties['limit'])
				? `${properties['limit']}`
				: `${this.getManyLimitDefault || 20}`;
		}

		/**
		 * Parse the input parameters and prepare the data for query to database.
		 * @param {object} properties
		 * @return {Promise<object>}
		 */
		async getManyPrepareProperties(properties: object): Promise<object> {
			const _getManyProcessQuery = {
				select: await this.getManyPreparePropertiesSelect(properties),
				join: await this.getManyPreparePropertiesJoin(properties),
				where: await this.getManyPreparePropertiesWhere(properties),
				groupBy: await this.getManyPreparePropertiesGroupBy(properties),
				orderBy: await this.getManyPreparePropertiesOrderBy(properties),
				offset: await this.getManyPreparePropertiesOffset(properties),
				limit: await this.getManyPreparePropertiesLimit(properties),
			};
			const output = { 
				...properties, 
				_getManyQueryString: await this.getManyListQueryString(properties, _getManyProcessQuery),
				_getManyQueryTotal: await this.getManyTotalQueryString(properties, _getManyProcessQuery),
			};

			console.log(`\n>>> QUERY getManyPrepareProperties list query string:\n-------------------------------------`, output._getManyQueryString);
			console.log(`\n>>> QUERY getManyPrepareProperties total query string:\n-------------------------------------`, output._getManyQueryTotal);

			return output;
		}

		/**
		 * A method that directly implements a query to database.
		 * Adds query result to "_getManyProcessResult" property.
		 * @param {properties} object
		 * @return {Promise<object>}
		 */
		async getManyProcess(properties: object): Promise<object> {
			return await super.getManyProcess({ 
				...properties, 
				_getManyProcessResult: {
					rows: await this.connectionService.query(properties['_getManyQueryString']),
					total: Number(((await this.connectionService.query(properties['_getManyQueryTotal']))[0] || {})['total']),
				}, 
			});
		}

		/**
		 * Parse the input parameters and prepare the data for returning to client.
		 * @param {object} propertiesInput
		 * @param {object} propertiesOutput
		 * @return {Promise<object>}
		 */
		async getManyResult(propertiesInput: object, propertiesOutput: object): Promise<object> {
			return propertiesOutput['_getManyProcessResult'];
		}

		/**
		 * List of allowed fields that the client can extract from model of database.
		 * @return Promise<Array<string>>
		 */
		async getOneAllowPrepareProperties(): Promise<Array<string>> {
			return [ 'id' ];
		}

		/**
		 * Parse the input parameters and prepare the data for query one model from database.
		 * @param {object} properties
		 * @return {Promise<object>}
		 */
		async getOnePrepareProperties(properties: object): Promise<object> {
			const _getOneProcessQuery = {
				select: await this.getManyPreparePropertiesSelect(properties),
				join: await this.getManyPreparePropertiesJoin(properties),
				where: await this.getManyPreparePropertiesWhere(properties),
				groupBy: await this.getManyPreparePropertiesGroupBy(properties),
				orderBy: await this.getManyPreparePropertiesOrderBy(properties),
				offset: 0,
				limit: 1,
			};
			const output = { 
				...properties, 
				_getOneQueryString: await this.getManyListQueryString(properties, _getOneProcessQuery),
			};

			console.log(`\n>>> QUERY getOnePrepareProperties list query string:\n-------------------------------------`, output._getOneQueryString);

			return output;
		}

		/**
		 * A method that directly implements a query to database.
		 * Adds query result to "_getOneProcessResult" property.
		 * @param {properties} object
		 * @return {Promise<object>}
		 */
		async getOneProcess(properties: object): Promise<object> {
			return await super.getOneProcess({ 
				...properties, 
				_getOneProcessResult: ((await this.connectionService.query(properties['_getOneQueryString'])) || [])[0], 
			});
		}

		/**
		 * Parse the input parameters and prepare the data for returning to client.
		 * @param {object} propertiesInput
		 * @param {object} propertiesOutput
		 * @return {Promise<object>}
		 */
		async getOneResult(propertiesInput: object, propertiesOutput: object): Promise<object> {
			return propertiesOutput['_getOneProcessResult'];
		}

		/**
		 * List of allowed fields that the client can add to the created model.
		 * @return Promise<Array<string>>
		 */
		async createAllowPrepareProperties(): Promise<Array<string>> {
			return [ 'id' ];
		}

		/**
		 * Parse the input parameters and prepare the data for the new model.
		 * @param {object} properties
		 * @return {Promise<object>}
		 */
		async createPrepareProperties(properties: object): Promise<object> {
			const columnsByAllow = await this.createAllowPrepareProperties();
			let column,
				output = {};

			for (column in properties) {
				if (columnsByAllow.includes(column)) {
					output[column] = properties[column];
				}
			}
			return { ...properties, _createPrepareProperties: output };
		}

		/**
		 * Method that directly adds new data to database.
		 * @param {object} properties
		 * @return {Promise<object>}
		 */
		async createProcess(properties: object): Promise<object> {
			return await super.createProcess({ ...properties, _createProcessResult: await this.repository.save(properties['_createPrepareProperties']) });
		}

		/**
		 * Parsing the resulting data after the process of adding data to database, before directly returning it back to the client.
		 * @param {object} propertiesInput
		 * @param {object} propertiesOutput
		 * @return {Promise<object>}
		 */
		async createResult(propertiesInput: object, propertiesOutput: object): Promise<object> {
			return propertiesOutput['_createProcessResult'];
		}

		/**
		 * List of allowed fields that the client can update many models in database.
		 * @return Promise<Array<string>>
		 */
		async updateManyAllowPrepareProperties(): Promise<Array<string>> {
			return [ 'id' ];
		}

		/**
		 * Parse the input parameters and prepare the data for updating many models.
		 * @param {object} properties
		 * @return {Promise<object>}
		 */
		async updateManyPrepareProperties(properties: object): Promise<object> {
			const getManyPreparedProperties = await this.getManyPrepareProperties(properties);
			const columnsByAllow = await this.updateManyAllowPrepareProperties();
			const columnsByRequest = properties['body'];
			let id,
				output = {};

			for (id in columnsByRequest) {
				const newValues = columnsByRequest[id];

				if (utilsCheckObjFilled(newValues)) {
					Object
						.keys(newValues)
						.filter((column) => columnsByAllow.includes(column))
						.forEach((column) => {
							if (!output[id]) {
								output[id] = {};
							}
							output[id][column] = newValues[column];
						});
				}
			}
			return { 
				...properties, 
				_updateManyPrepareProperties: output, 
				_getManyQueryString: getManyPreparedProperties['_getManyQueryString'],
				_getManyQueryTotal: getManyPreparedProperties['_getManyQueryTotal'],
			};
		}

		/**
		 * Method that directly update data in database.
		 * @param {object} properties
		 * @return {Promise<object>}
		 */
		async updateManyProcess(properties: object): Promise<object> {
			const newProperties = await this.getManyProcess(properties);
			const rows = newProperties['_getManyProcessResult']['rows'];
			let i = 0,
				output = [];

			while (i < rows.length) {
				if (await this.repository.update({ id: rows[i]['id'] }, properties[rows[i]['id']])) {
					output.push({ ...rows[i], ...properties[rows[i]['id']] });
				}
				i++;
			}
			return { ...properties, _dropManyProcessResult: output };
		}

		/**
		 * Parsing the resulting data after the process of update many models in database, before directly returning it back to the client.
		 * @param {object} propertiesInput
		 * @param {object} propertiesOutput
		 * @return {Promise<object>}
		 */
		async updateManyResult(propertiesInput: object, propertiesOutput: object): Promise<object> {
			return propertiesOutput['_updateManyProcessResult'];
		}

		/**
		 * List of allowed fields that the client can update one model in database.
		 * @return Promise<Array<string>>
		 */
		async updateOneAllowPrepareProperties(): Promise<Array<string>> {
			return [ 'id' ];
		}

		/**
		 * Parse the input parameters and prepare the data for updating one model.
		 * @param {object} properties
		 * @return {Promise<object>}
		 */
		async updateOnePrepareProperties(properties: object): Promise<object> {
			const columnsByAllow = await this.updateOneAllowPrepareProperties();
			let column,
				output = {};

			for (column in properties) {
				if (columnsByAllow.includes(column)) {
					output[column] = properties[column];
				}
			}
			return { 
				...properties, 
				_updateOnePrepareProperties: output,
			};
		}

		/**
		 * Method that directly update data in database.
		 * @param {object} properties
		 * @return {Promise<object>}
		 */
		async updateOneProcess(properties: object): Promise<object> {
			const _updateOnePrepareProperties = {
				...properties['_updateOnePrepareProperties'],
				...utilsCheckStrId(properties['newId'])
					? { id: properties['newId'] }
					: {},
			};

			delete _updateOnePrepareProperties['newId'];

			return await super.updateOneProcess({
				...properties,
				_updateOneProcessResult: await this.repository.update({
					id: properties['id'],
				}, _updateOnePrepareProperties),
				_updateOnePrepareProperties,
			});
		}

		/**
		 * Parsing the resulting data after the process of update one model in database, before directly returning it back to the client.
		 * @param {object} propertiesInput
		 * @param {object} propertiesOutput
		 * @return {Promise<object>}
		 */
		async updateOneResult(propertiesInput: object, propertiesOutput: object): Promise<object> {
			let column,
				select = {};

			for (column in propertiesOutput['_updateOnePrepareProperties']) {
				select[column] = true;
			}
			const model = await this.repository.findOne({
				select,
				where: {
					id: propertiesOutput['_updateOnePrepareProperties']['id'],
				},
			});
			return model;
		}

		/**
		 * List of allowed fields that the client can view after drop many models from database.
		 * @return Promise<Array<string>>
		 */
		async dropManyAllowPrepareProperties(): Promise<Array<string>> {
			return [ 'id' ];
		}

		/**
		 * Parse the input parameters and prepare the data for deleting many models.
		 * @param {object} properties
		 * @return {Promise<object>}
		 */
		async dropManyPrepareProperties(properties: object): Promise<object> {
			const columnsByAllow = await this.dropManyAllowPrepareProperties();
			let i = 0,
				select = {};

			while (i < columnsByAllow.length) {
				select[columnsByAllow[i]] = true;
				i++;
			}
			return { ...properties, _dropManyPrepareProperties: select };
		}

		/**
		 * Method that directly deleting many models from database.
		 * @param {object} properties
		 * @return {Promise<object>}
		 */
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
				})

				if (model
					&& await this.repository.delete({ id: rows[i]['id'] })) {
					output.push(model);
				}
				i++;
			}
			return { ...properties, _dropManyProcessResult: output };
		}

		/**
		 * Parsing the resulting data after the process of deleting many models from database, before directly returning it back to the client.
		 * @param {object} propertiesInput
		 * @param {object} propertiesOutput
		 * @return {Promise<object>}
		 */
		async dropManyResult(propertiesInput: object, propertiesOutput: object): Promise<object> {
			return propertiesOutput['_dropManyProcessResult'];
		}

		/**
		 * List of allowed fields that the client can view after drop one model from database.
		 * @return Promise<Array<string>>
		 */
		async dropOneAllowPrepareProperties(): Promise<Array<string>> {
			return [ 'id' ];
		}

		/**
		 * Parse the input parameters and prepare the data for deleting one model.
		 * @param {object} properties
		 * @return {Promise<object>}
		 */
		async dropOnePrepareProperties(properties: object): Promise<object> {
			const columnsByAllow = await this.dropOneAllowPrepareProperties();
			let i = 0,
				select = {};

			while (i < columnsByAllow.length) {
				select[columnsByAllow[i]] = true;
				i++;
			}
			const model = await this.repository.findOne({ 
				select, 
				where: { 
					id: properties['id'], 
				}, 
			});

			return { ...properties, _dropOnePrepareProperties: model };
		}

		/**
		 * Method that directly delete model data in database.
		 * @param {object} properties
		 * @return {Promise<object>}
		 */
		async dropOneProcess(properties: object): Promise<object> {
			return await super.updateOneProcess({ ...properties, _dropOneProcessResult: await this.repository.delete({ id: properties['id'] }) });
		}

		/**
		 * Parsing the resulting data after the process of delete one model from database, before directly returning it back to the client.
		 * @param {object} propertiesInput
		 * @param {object} propertiesOutput
		 * @return {Promise<object>}
		 */
		async dropOneResult(propertiesInput: object, propertiesOutput: object): Promise<object> {
			return propertiesOutput['_dropOnePrepareProperties'];
		}
	}

	return AbstractBase;
}
