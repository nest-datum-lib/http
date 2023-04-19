import React from 'react';
import StyledWrapper from './Styled/Wrapper.jsx';

/**
 * https://i.imgur.com/ZFYPxZM.png
 */
let Upload = (props) => {
	return <StyledWrapper { ...props } color="secondary" />;
};

Upload = React.memo(Upload);
Upload.defaultProps = {
};
Upload.propTypes = {
};

export default Upload;
