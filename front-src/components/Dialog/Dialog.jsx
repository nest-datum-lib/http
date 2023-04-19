import React from 'react';
import StyledWrapper from './Styled/Wrapper.jsx';

let Dialog = (props) => {
	return <StyledWrapper { ...props } />;
};

Dialog = React.memo(Dialog);
Dialog.defaultProps = {
};
Dialog.propTypes = {
};

export default Dialog;
