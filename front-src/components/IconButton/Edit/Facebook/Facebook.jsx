import React from 'react';
import { ReactComponent as SvgIconsFacebookSmall } from 'static/svg/icons/facebook-small.svg';
import StyledWrapper from './Styled/Wrapper.jsx';

/**
 * https://i.imgur.com/zqQhSwB.png
 */
let Facebook = (props) => {
	return <StyledWrapper { ...props }>
		<SvgIconsFacebookSmall />
	</StyledWrapper>;
};

Facebook = React.memo(Facebook);
Facebook.defaultProps = {
};
Facebook.propTypes = {
};

export default Facebook;
