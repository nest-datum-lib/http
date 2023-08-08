import { Connection } from 'typeorm';
import { ModelService } from '@nest-datum/model';
import {
	objFilled as utilsCheckObjFilled,
	arrFilled as utilsCheckArrFilled,
	strFilled as utilsCheckStrFilled,
	numericInt as utilsCheckNumericInt,
} from '@nest-datum-utils/check';

class Sample {
}

export function ModelSqlService(Base: any = Sample) {
	class AbstractBase extends ModelService(Base) {
		public readonly repository;
		public readonly connectionService: Connection;
		public readonly getManyAllDefaultLimit: number = 20;

		/**
		 * Concatenate strings from prepared "getMany" properties for query rows.
		 * @param {object} properties
		 * @param {object} sqlQueryBuilderProperties
		 * @return {Promise<string>}
		 */
		async getManyListQueryString(properties: object, sqlQueryBuilderProperties: object): Promise<string> {
			return `\nSELECT ${sqlQueryBuilderProperties['select']}\nFROM ${this.repository.metadata.tableName}\n${sqlQueryBuilderProperties['join']
				? `${sqlQueryBuilderProperties['join']}`
				: ''}${sqlQueryBuilderProperties['where']
					? `\n\tWHERE \n\t${sqlQueryBuilderProperties['where']}`
					: ''}${sqlQueryBuilderProperties['groupBy']
						? `\n\tGROUP BY ${sqlQueryBuilderProperties['groupBy']}`
						: ''}${sqlQueryBuilderProperties['orderBy']
							? `\n\tORDER BY ${sqlQueryBuilderProperties['orderBy']}`
							: ''}${(sqlQueryBuilderProperties['limit']
								|| sqlQueryBuilderProperties['offset'])
								? `LIMIT ${sqlQueryBuilderProperties['offset'] ? `${sqlQueryBuilderProperties['offset']},` : ''} ${sqlQueryBuilderProperties['limit'] || this.getManyAllDefaultLimit}`
								: ''};`;
		}

		/**
		 * Concatenate strings from prepared "getMany" properties for query total value.
		 * @param {object} properties
		 * @param {object} sqlQueryBuilderProperties
		 * @return {Promise<string>}
		 */
		async getManyTotalQueryString(properties: object, sqlQueryBuilderProperties: object): Promise<string> {
			return `\nSELECT COUNT(DISTINCT \`${this.repository.metadata.tableName}\`.\`id\`) AS \`total\`, ${sqlQueryBuilderProperties['select']}\nFROM ${this.repository.metadata.tableName}\n${sqlQueryBuilderProperties['join']
				? `${sqlQueryBuilderProperties['join']}`
				: ''}${sqlQueryBuilderProperties['where']
					? `\n\tWHERE \n\t${sqlQueryBuilderProperties['where']}`
					: ''}${sqlQueryBuilderProperties['groupBy']
						? `\n\tGROUP BY ${sqlQueryBuilderProperties['groupBy']}`
						: ''}${sqlQueryBuilderProperties['orderBy']
							? `\n\tORDER BY ${sqlQueryBuilderProperties['orderBy']}`
							: ''};`;
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

			return (columnsSelectAllow.length <= 0)
				? '*'
				: (() => {
					const columnsSelectAllowFiltered = columnsSelectAllow.filter((column) => columnsSelectRequest.indexOf(column) >= -1);
					let i = 0,
						output = [];

					while (i < columnsSelectAllowFiltered.length) {
						const column = columnsSelectAllowFiltered[i];
						const columnSplit = column.split('.');

						if (columnSplit.length === 2
							&& utilsCheckStrFilled(columnSplit[1])
							&& (columnSplit[0] === this.repository.metadata.tableName
								|| columnsJoinAllow.includes(columnSplit[0]))) {
							output.push(`\`${columnSplit[0]}\`.\`${columnSplit[1]}\` AS \`${columnSplit[0]}${(columnSplit[1].charAt(0).toUpperCase() + columnSplit[1].slice(1))}\``);
						}
						else if (columnSplit.length === 1
							&& columnsSelectAllow.includes(columnSplit[0])) {
							output.push(`\`${this.repository.metadata.tableName}\`.\`${columnSplit[0]}\` AS \`${this.repository.metadata.tableName}${(columnSplit[0].charAt(0).toUpperCase() + columnSplit[0].slice(1))}\``);
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
				}
			}
			return output.join(`,`);
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
				: `${this.getManyAllDefaultLimit || 20}`;
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
		 * Parse the input parameters and prepare the data for the query to data base.
		 * @param {object} propertiesInput
		 * @param {object} propertiesOutput
		 * @return {Promise<object>}
		 */
		async getManyResult(propertiesInput: object, propertiesOutput: object): Promise<object> {
			return propertiesOutput['_getManyProcessResult'];
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
		 * Parsing the resulting data after the process of adding data to database, before directly returning it back to the client
		 * @param {object} propertiesInput
		 * @param {object} propertiesOutput
		 * @return {Promise<object>}
		 */
		async createResult(propertiesInput: object, propertiesOutput: object): Promise<object> {
			return propertiesOutput['_createProcessResult'];
		}
	}

	return AbstractBase;
}
