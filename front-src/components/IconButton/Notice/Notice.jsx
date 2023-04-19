import React from 'react';
import { ReactComponent as SvgIconsBellMenuSmall } from 'static/svg/icons/bellMenu-small.svg';
import StyledWrapper from './Styled/Wrapper.jsx';

let Notice = (props) => {
	return <StyledWrapper { ...props }>
		<SvgIconsBellMenuSmall />
	</StyledWrapper>;
};

Notice = React.memo(Notice);
Notice.defaultProps = {
	size: 'small',
};
Notice.propTypes = {
};

export default Notice;
