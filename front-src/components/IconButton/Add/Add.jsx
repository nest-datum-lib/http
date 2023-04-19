import React from 'react';
import { ReactComponent as SvgIconsAddIconSmall } from 'static/svg/icons/plus-small.svg';
import StyledWrapper from './Styled/Wrapper.jsx';

/**
 * https://i.imgur.com/JhA5F6s.png
 */
let Add = (props) => {
	return <StyledWrapper { ...props }>
		<SvgIconsAddIconSmall />
	</StyledWrapper>;
};

Add = React.memo(Add);
Add.defaultProps = {
};
Add.propTypes = {
};

export default Add;
