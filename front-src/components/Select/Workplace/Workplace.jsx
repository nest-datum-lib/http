import React from 'react';
import StyledWrapper from './Styled/Wrapper.jsx';

const data = [{
	id: '1',
	title: 'Remote',
}, {
	id: '2',
	title: 'Hybrid remote',
}, {
	id: '3',
	title: 'Onsite',
}, {
	id: '4',
	title: 'Temporary Remote',
}];
let Workplace = (props) => {
	return <StyledWrapper { ...props }>
		{data}
	</StyledWrapper>;
};

Workplace = React.memo(Workplace);
Workplace.defaultProps = {
};
Workplace.propTypes = {
};

export default Workplace;
