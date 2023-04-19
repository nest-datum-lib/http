import React from 'react';
import StyledWrapper from './Styled/Wrapper.jsx';

const data = [{
	id: '1',
	title: 'Monday to Friday',
}, {
	id: '2',
	title: 'Weekend availability',
}, {
	id: '3',
	title: 'Weekend only',
}, {
	id: '4',
	title: 'No weekends',
}];

let DaysOfWeek = (props) => {
	return <StyledWrapper { ...props } loader={false}>
		{data}
	</StyledWrapper>;
};

DaysOfWeek = React.memo(DaysOfWeek);
DaysOfWeek.defaultProps = {
	type: 'select',
};
DaysOfWeek.propTypes = {
};

export default DaysOfWeek;
