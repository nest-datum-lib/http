import React from 'react';
import StyledWrapper from './Styled/Wrapper.jsx';

let Refresh = (props) => {
	return <StyledWrapper { ...props } />;
};

Refresh = React.memo(Refresh);
Refresh.defaultProps = {
};
Refresh.propTypes = {
};

export default Refresh;
