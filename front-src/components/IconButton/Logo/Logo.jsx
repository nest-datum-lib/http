import React from 'react';
import { ReactComponent as SvgLogoSmall } from 'static/svg/logo-small.svg';
import StyledWrapper from './Styled/Wrapper.jsx';

let Logo = (props) => {
	return <StyledWrapper { ...props }>
		<SvgLogoSmall />
	</StyledWrapper>;
};

Logo = React.memo(Logo);
Logo.defaultProps = {
	size: 'small',
};
Logo.propTypes = {
};

export default Logo;
