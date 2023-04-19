import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { 
	selectorMainExtract,
	actionApiListLimit,
	actionApiListPage,
	actionApiListPurge,
	actionApiListGet,
} from '@nest-datum-ui/Store';
import { arrFilled as utilsCheckArrFilled } from '@nest-datum-utils/check';
import StyledWrapper from './Styled/Wrapper.jsx';
import { ReactComponent as ArrowDown } from 'static/svg/icons/arrowDown-small-light.svg';
import { ReactComponent as CheckboxChecked } from 'static/svg/icons/checkboxChecked-medium.svg';
import { ReactComponent as CheckboxUnchecked } from 'static/svg/icons/checkboxUnchecked-medium.svg';

let Multiple = ({ children, storeName, apiUrl, itemKey, filter, ...props }) => {
	const page = useSelector(selectorMainExtract([ 'api', 'list', storeName, 'page' ])) || 1;
	const limit = useSelector(selectorMainExtract([ 'api', 'list', storeName, 'limit' ])) || 20;
	const total = useSelector(selectorMainExtract([ 'api', 'list', storeName, 'total' ]));
	const data = useSelector(selectorMainExtract([ 'api', 'list', storeName, 'data' ]));
	const dataProcessed = utilsCheckArrFilled(children)
		? children
		: data;
	const onChangePage = React.useCallback((e, newPage) => actionApiListPage(storeName, newPage), [
		storeName,
	]);
	const onLimit = React.useCallback((e) => actionApiListLimit(storeName, e), [
		storeName,
	]);

	React.useEffect(() => {
		if (apiUrl) {
			actionApiListGet(storeName, {
				apiUrl,
				page,
				limit,
				filter,
			})();
		}
	}, [
		storeName,
		apiUrl,
		page,
		limit,
		filter,
	]);

	React.useEffect(() => () => {
		actionApiListPurge(storeName)();
	}, [
		storeName,
	]);

	return <StyledWrapper { ...props } 
		IconComponent={() => <ArrowDown />}
		page={page} 
		limit={limit} 
		total={total} 
		onChangePage={onChangePage}
		onLimit={onLimit}
		checkboxicon={<CheckboxUnchecked />} 
		checkboxcheckedicon={<CheckboxChecked />}>
		{dataProcessed
			&& dataProcessed.map((item) => ({
				key: item.id, 
				id: item.id,
				title: item[itemKey] || item.title || item.name,
			}))}
	</StyledWrapper>;
};

Multiple = React.memo(Multiple);
Multiple.defaultProps = {
	type: 'select',
};
Multiple.propTypes = {
	storeName: PropTypes.string.isRequired,
	apiUrl: PropTypes.string,
	itemKey: PropTypes.string,
	filter: PropTypes.object,
};

export default Multiple;
