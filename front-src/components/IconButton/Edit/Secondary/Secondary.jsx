import React from 'react';
import { ReactComponent as SvgIconsEditSmallBlue } from 'static/svg/icons/edit-small-blue.svg';
import StyledWrapper from './Styled/Wrapper.jsx';

let Secondary = (props) => {
	return <StyledWrapper { ...props }>
		<SvgIconsEditSmallBlue />
	</StyledWrapper>;
};

Secondary = React.memo(Secondary);
Secondary.defaultProps = {
};
Secondary.propTypes = {
};

export default Secondary;
