import React from 'react';
import StyledWrapper from './Styled/Wrapper.jsx';

const data = [{
	id: '1',
	title: 'Basic',
}, {
	id: '2',
	title: 'Middle',
}, {
	id: '3',
	title: 'Advanced',
}, {
	id: '4',
	title: 'Fluent',
}];

let Level = (props) => {
	return <StyledWrapper { ...props } loader={false}>
		{data}
	</StyledWrapper>;
};

Level = React.memo(Level);
Level.defaultProps = {
	type: 'select',
};
Level.propTypes = {
};

export default Level;
