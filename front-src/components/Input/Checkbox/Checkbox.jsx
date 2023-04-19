import React from 'react';
import StyledWrapper from './Styled/Wrapper.jsx';

let Checkbox = (props) => {
	return <StyledWrapper { ...props } />;
};

Checkbox = React.memo(Checkbox);
Checkbox.defaultProps = {
};
Checkbox.propTypes = {
};

export default Checkbox;
