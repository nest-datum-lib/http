import React from 'react';
import { ReactComponent as FacebookIconMedium } from 'static/svg/icons/google-medium.svg';
import StyledWrapper from './Styled/Wrapper.jsx';

/**
 * https://i.imgur.com/CGDvJIc.png
 */
let Google = (props) => {
	return <StyledWrapper { ...props } startIcon={<FacebookIconMedium />} />;
};

Google = React.memo(Google);
Google.defaultProps = {
	children: 'Sign in with Google',
};
Google.propTypes = {
};

export default Google;
