import React from 'react';
import { strFilled as utilsCheckStrFilled } from '@nest-datum-utils/check';
import StarIcon from '@mui/icons-material/Star';
import ButtonLink from '@nest-datum-ui/Button/Link';
import StyledWrapper from './Styled/Wrapper.jsx';

/**
 * https://i.imgur.com/p4rIWb5.png
 */
let Primary = ({ startIcon, to, ...props }) => {
	return <StyledWrapper 
		{ ...props }
		{ ...utilsCheckStrFilled(to)
			? { to, component: ButtonLink }
			: {} } />;
};

Primary = React.memo(Primary);
Primary.defaultProps = {
	startIcon: <StarIcon />,
};
Primary.propTypes = {
};

export default Primary;
