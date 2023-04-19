import React from 'react';
import StyledWrapper from './Styled/Wrapper.jsx';

let Drop = (props) => {
	return <StyledWrapper { ...props } />;
};

Drop = React.memo(Drop);
Drop.defaultProps = {
};
Drop.propTypes = {
};

export default Drop;
