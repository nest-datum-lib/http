import React from 'react';
import StyledWrapper from './Styled/Wrapper.jsx';

const data = [{
	id: '1',
	title: 'Full-time',
}, {
	id: '2',
	title: 'Part-time',
}, {
	id: '3',
	title: 'Temporary',
}, {
	id: '4',
	title: 'Contract',
}];

let Worktype = (props) => {
	return <StyledWrapper { ...props } loader={false}>
		{data}
	</StyledWrapper>;
};

Worktype = React.memo(Worktype);
Worktype.defaultProps = {
};
Worktype.propTypes = {
};

export default Worktype;
