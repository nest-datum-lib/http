import React from 'react';
import StyledWrapper from './Styled/Wrapper.jsx';

/**
 * https://i.imgur.com/78rKDqz.png
 */
let Chip = (props) => {
	return <StyledWrapper { ...props } />;
};

Chip = React.memo(Chip);
Chip.defaultProps = {
};
Chip.propTypes = {
};

export default Chip;
