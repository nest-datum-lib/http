
export class EntityController {
	async errorHandler(callback = () => {
		console.log('????????222222');

		return [];
	}) {
		return await callback();
	}

	async validateMany(properties: object) {
		const output = {};

		// if (utilsCheckExists(properties['select'])) {
		// 	if (!utilsCheckStrJson(properties['select'])) {
		// 		throw new MethodNotAllowedException(`Property "select" is not valid.`);
		// 	}
		// 	output['select'] = utilsFormatStrToObj(options['select']);
		// }
		// if (utilsCheckExists(properties['relations'])) {
		// 	if (!utilsCheckStrJson(properties['relations'])) {
		// 		throw new MethodNotAllowedException(`Property "relations" is not valid.`);
		// 	}
		// 	output['relations'] = utilsFormatStrToObj(options['relations']);
		// }
		// if (utilsCheckExists(properties['filter'])) {
		// 	if (!utilsCheckStrJson(properties['filter'])) {
		// 		throw new MethodNotAllowedException(`Property "filter" is not valid.`);
		// 	}
		// 	output['filter'] = utilsFormatStrToObj(options['filter']);
		// }
		// if (utilsCheckExists(properties['sort'])) {
		// 	if (!utilsCheckStrJson(properties['sort'])) {
		// 		throw new MethodNotAllowedException(`Property "sort" is not valid.`);
		// 	}
		// 	output['sort'] = utilsFormatStrToObj(options['sort']);
		// }
		// if (utilsCheckExists(properties['query'])) {
		// 	if (!utilsCheckStrQuery(properties['query'])) {
		// 		throw new MethodNotAllowedException(`Property "query" is not valid.`);
		// 	}
		// 	output['query'] = properties['query'];
		// }
		// if (utilsCheckExists(properties['page']) && !utilsCheckNumericInt(properties['page'])) {
		// 	throw new MethodNotAllowedException(`Property "page" is not valid.`);
		// }
		// if (utilsCheckExists(properties['limit']) && !utilsCheckNumericInt(properties['limit'])) {
		// 	throw new MethodNotAllowedException(`Property "limit" is not valid.`);
		// }
		return output;
	}
}
