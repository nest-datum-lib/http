import React from 'react';
import StyledWrapper from './Styled/Wrapper.jsx';

const data = [{
	id: '1',
	title: 'English',
}, {
	id: '2',
	title: 'German',
}];

let Language = (props) => {
	return <StyledWrapper { ...props } loader={false}>
		{data}
	</StyledWrapper>;
};

Language = React.memo(Language);
Language.defaultProps = {
	type: 'select',
};
Language.propTypes = {
};

export default Language;
