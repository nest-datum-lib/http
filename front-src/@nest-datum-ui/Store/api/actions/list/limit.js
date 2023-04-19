import { fireListProp } from './prop.js';

export const fireListLimit = async (storeListName, e) => await fireListProp(storeListName, 'data', {
	loader: true,
	page: 1,
	limit: e.target.value,
})();
