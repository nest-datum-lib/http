import React from 'react';
import StyledWrapper from './Styled/Wrapper.jsx';

let InputDate = (props) => {
	return <StyledWrapper { ...props } />;
};

InputDate = React.memo(InputDate);
InputDate.defaultProps = {
};
InputDate.propTypes = {
};

export default InputDate;
