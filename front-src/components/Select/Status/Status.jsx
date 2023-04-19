import React from 'react';
import { useLocation } from 'react-router-dom';
import { 
	ContextApp,
	ContextRoute, 
} from '@nest-datum-ui/Context';
import { 
	hookUrlFilterItem,
	actionUrlFilter, 
} from '@nest-datum-ui/Store';
import StyledWrapper from './Styled/Wrapper.jsx';

const data = [{
	id: '1',
	title: 'Applied',
}, {
	id: '2',
	title: 'Interview',
}, {
	id: '3',
	title: 'Accept',
}, {
	id: '4',
	title: 'Declined',
}, {
	id: '5',
	title: 'Hired',
}];

let Status = ({ name, ...props }) => {
	const routeName = React.useContext(ContextRoute);
	const { [routeName]: { list: { storeName } } } = React.useContext(ContextApp);
	const { search } = useLocation();
	const value = hookUrlFilterItem(name, search);
	const valueProcessed = (value === undefined)
		? ''
		: value;
	const onChange = React.useCallback((e) => actionUrlFilter(storeName, name, e.target.value), [
		storeName,
		name,
	]);

	return <StyledWrapper { ...props } name={name} onChange={onChange} value={valueProcessed}>
		{data}
	</StyledWrapper>;
};

Status = React.memo(Status);
Status.defaultProps = {
	type: 'select',
	name: 'statusId',
};
Status.propTypes = {
};

export default Status;
