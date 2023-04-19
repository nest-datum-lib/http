import React from 'react';
import StyledWrapper from './Styled/Wrapper.jsx';

/**
 * https://i.imgur.com/U9JhsEj.png
 * https://i.imgur.com/AkpcieV.png
 */
let Secondary = (props) => {
	return <StyledWrapper { ...props } />;
};

Secondary = React.memo(Secondary);
Secondary.defaultProps = {
};
Secondary.propTypes = {
};

export default Secondary;
