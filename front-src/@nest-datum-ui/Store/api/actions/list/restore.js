import { fireFormRestore } from '../form/restore.js';

export const fireListRestore = async (storeListName, entityId) => fireFormRestore(storeListName, entityId)();
