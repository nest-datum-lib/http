import React from 'react';
import PropTypes from 'prop-types';
import { 
	ContextApp,
	ContextRoute, 
} from '@nest-datum-ui/Context';
import { actionUrlQuery } from '@nest-datum-ui/Store';
import Search from '../Search.jsx';

let Url = ({ onSearch, ...props }) => {
	const routeName = React.useContext(ContextRoute);
	const { [routeName]: { list: { storeName } } } = React.useContext(ContextApp);
	const onSearchWrapper = React.useCallback((value) => {
		actionUrlQuery(storeName, value);
		onSearch(value);
	}, [
		onSearch,
		storeName,
	]);

	return <Search { ...props } onSearch={onSearchWrapper} />;
};

Url = React.memo(Url);
Url.defaultProps = {
	onSearch: () => {},
};
Url.propTypes = {
	onSearch: PropTypes.func,
};

export default Url;
