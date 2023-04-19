import React from 'react';
import StyledWrapper from './Styled/Wrapper.jsx';

/**
 * https://i.imgur.com/MbH8n1m.png
 */
let Paper = (props) => {
	return <StyledWrapper { ...props } />;
};

Paper = React.memo(Paper);
Paper.defaultProps = {
};
Paper.propTypes = {
};

export default Paper;
