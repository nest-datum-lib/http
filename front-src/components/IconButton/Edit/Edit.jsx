import React from 'react';
import { ReactComponent as SvgIconsEditProfileSmall } from 'static/svg/icons/editProfile-small.svg';
import StyledWrapper from './Styled/Wrapper.jsx';

/**
 * https://i.imgur.com/uxijRRu.png
 */
let Edit = (props) => {
	return <StyledWrapper { ...props }>
		<SvgIconsEditProfileSmall />
	</StyledWrapper>;
};

Edit = React.memo(Edit);
Edit.defaultProps = {
};
Edit.propTypes = {
};

export default Edit;
