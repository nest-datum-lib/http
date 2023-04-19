import React from 'react';
import { ReactComponent as SvgIconsEditProfileSmall } from 'static/svg/icons/editProfile-small.svg';
import { ReactComponent as SvgIconsProfileNoAvatar } from 'static/svg/icons/profileNoAvatar-medium.svg';
import StyledWrapper from './Styled/Wrapper.jsx';

let Image = (props) => {
	return <StyledWrapper { ...props }>
		{ !props.isfilechoozen && <SvgIconsProfileNoAvatar /> }
		<SvgIconsEditProfileSmall className="iconEdit"/>
	</StyledWrapper>;
};

Image = React.memo(Image);
Image.defaultProps = {
};
Image.propTypes = {
};

export default Image;
