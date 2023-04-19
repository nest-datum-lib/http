import React from 'react';
import { useSelector } from 'react-redux';
import { 
	ContextApp,
	ContextRoute,
} from '@nest-datum-ui/Context';
import { 
	selectorMainExtract,
	actionApiListGet, 
	actionApiListPurge,
} from '@nest-datum-ui/Store'
import StyledWrapper from './Styled/Wrapper.jsx';

let Table = ({ 
	loader, 
	loadOnFirstRender, 
	disableMap, 
	mobileWithDots, 
	disablePurge, 
	...props 
}) => {
	const routeName = React.useContext(ContextRoute);
	const { [routeName]: { form: { storeName, apiUrl } } } = React.useContext(ContextApp);
	const dataLength = useSelector(selectorMainExtract([ 'api', 'list', storeName, 'data', 'length' ]));
	const loaderProcessed = loader === true || !(dataLength > 0);

	React.useEffect(() => {
		if (loadOnFirstRender === true) {
			actionApiListGet(storeName, { apiUrl })();
		}
	}, [
		loadOnFirstRender,
		storeName,
		apiUrl,
	]);

	React.useEffect(() => () => {
		if (storeName && !disablePurge) {
			actionApiListPurge(storeName)();
		}
	}, [
		storeName,
		disablePurge,
	]);

	return <StyledWrapper { ...props } loader={loaderProcessed} />;
};

Table = React.memo(Table);
Table.defaultProps = {
};
Table.propTypes = {
};

export default Table;
