import React from 'react';
import StyledWrapper from './Styled/Wrapper.jsx';

let WorkplaceSetting = (props) => {
	return <StyledWrapper { ...props } />;
};

WorkplaceSetting = React.memo(WorkplaceSetting);
WorkplaceSetting.defaultProps = {
};
WorkplaceSetting.propTypes = {
};

export default WorkplaceSetting;
