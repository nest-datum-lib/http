import React from 'react';
import { ReactComponent as SvgIconsLinkedinSmall } from 'static/svg/icons/linkedin-small.svg';
import StyledWrapper from './Styled/Wrapper.jsx';

/**
 * https://i.imgur.com/zqQhSwB.png
 */
let Linkedin = (props) => {
	return <StyledWrapper { ...props }>
		<SvgIconsLinkedinSmall />
	</StyledWrapper>;
};

Linkedin = React.memo(Linkedin);
Linkedin.defaultProps = {
};
Linkedin.propTypes = {
};

export default Linkedin;
