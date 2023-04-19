import React from 'react';
import StyledWrapper from './Styled/Wrapper.jsx';

let Form = (props) => {
	return <StyledWrapper { ...props } />;
};

Form = React.memo(Form);
Form.defaultProps = {
};
Form.propTypes = {
};

export default Form;
