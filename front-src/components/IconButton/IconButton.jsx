import React from 'react';
import { strFilled as utilsCheckStrFilled } from '@nest-datum-utils/check';
import ButtonLink from '@nest-datum-ui/Button/Link';
import StyledWrapper from './Styled/Wrapper.jsx';

let IconButton = ({ to, ...props }) => {
	return <StyledWrapper 
		{ ...props }
		{ ...utilsCheckStrFilled(to)
			? { to, component: ButtonLink }
			: {} } />;
};

IconButton = React.memo(IconButton);
IconButton.defaultProps = {
	size: 'small',
};
IconButton.propTypes = {
};

export default IconButton;
