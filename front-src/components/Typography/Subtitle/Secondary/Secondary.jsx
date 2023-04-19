import React from 'react';
import StyledWrapper from './Styled/Wrapper.jsx';

let Secondary = (props) => {
	return <StyledWrapper { ...props } component="div" />;
};

Secondary = React.memo(Secondary);
Secondary.defaultProps = {
};
Secondary.propTypes = {
};

export default Secondary;
