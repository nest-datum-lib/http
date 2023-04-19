import React from 'react';
import { ReactComponent as FacebookIconMedium } from 'static/svg/icons/facebook-medium.svg';
import StyledWrapper from './Styled/Wrapper.jsx';

/**
 * https://i.imgur.com/bu5PSJp.png
 */
let Facebook = (props) => {
	return <StyledWrapper { ...props } startIcon={<FacebookIconMedium />} />;
};

Facebook = React.memo(Facebook);
Facebook.defaultProps = {
	children: 'Sign in with Facebook',
};
Facebook.propTypes = {
};

export default Facebook;
