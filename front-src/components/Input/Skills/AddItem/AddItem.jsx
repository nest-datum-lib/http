import React from 'react';
import StyledWrapper from './Styled/Wrapper.jsx';

let AddItem = ({ children, ...props }) => {
	return <StyledWrapper { ...props }>
		Add "{children}"
	</StyledWrapper>;
};
AddItem = React.memo(AddItem);
AddItem.defaultProps = {
};
AddItem.propTypes = {
};

export default AddItem;
