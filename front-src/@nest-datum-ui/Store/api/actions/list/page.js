import { getStore } from '../../../Store.js';
import { fireListProp } from './prop.js';

export const fireListPage = async (storeListName, newPage, callback = () => {}) => {
	const currentPage = Number((getStore()
		.getState()
		.api
		.list[storeListName] || {})
		.page);

	if (newPage !== currentPage) {
		await fireListProp(storeListName, 'data', {
			loader: true,
			page: newPage,
		})();

		return callback(currentPage, newPage);
	}
};
