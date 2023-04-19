import React from 'react';
import StyledWrapper from './Styled/Wrapper.jsx';

const data = [{
	id: '1',
	title: '4 hours',
}, {
	id: '2',
	title: '8 hours',
}, {
	id: '3',
	title: '12 hours',
}, {
	id: '4',
	title: 'Day shifts',
}, {
	id: '5',
	title: 'Night shifts',
}, {
	id: '6',
	title: 'Evening shifts',
}, {
	id: '7',
	title: 'Overnight shifts',
}];

let Shifts = (props) => {
	return <StyledWrapper { ...props } loader={false}>
		{data}
	</StyledWrapper>;
};

Shifts = React.memo(Shifts);
Shifts.defaultProps = {
	type: 'select',
};
Shifts.propTypes = {
};

export default Shifts;
