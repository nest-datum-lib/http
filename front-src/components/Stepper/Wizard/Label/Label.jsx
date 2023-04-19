import React from 'react';
import StyledWrapper from './Styled/Wrapper.jsx';

let Label = ({ icon, completed, active, error }) => {
	return <StyledWrapper active={Number(active)} completed={Number(completed)}>
		{icon}
	</StyledWrapper>;
};

Label = React.memo(Label);
Label.defaultProps = {
};
Label.propTypes = {
};

export default Label;
