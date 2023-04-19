import React from 'react';
import { ReactComponent as SvgIconsEditProfileSmall } from 'static/svg/icons/editProfile-small.svg';
import StyledWrapper from './Styled/Wrapper.jsx';

/**
 * https://i.imgur.com/AKIQcci.png
 */
let Primary = (props) => {
	return <StyledWrapper { ...props }>
		<SvgIconsEditProfileSmall className="icon-button_edit-profile" />
	</StyledWrapper>;
};

Primary = React.memo(Primary);
Primary.defaultProps = {
};
Primary.propTypes = {
};

export default Primary;
