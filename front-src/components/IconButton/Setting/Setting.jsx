import React from 'react';
import { ReactComponent as SvgIconsDotsThreeVerticalSmall } from 'static/svg/icons/DotsThreeVertical-small.svg';
import StyledWrapper from './Styled/Wrapper.jsx';

let Setting = (props) => {
	return <StyledWrapper { ...props }>
		<SvgIconsDotsThreeVerticalSmall />
	</StyledWrapper>;
};

Setting = React.memo(Setting);
Setting.defaultProps = {
	size: 'small',
};
Setting.propTypes = {
};

export default Setting;
