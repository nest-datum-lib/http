import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import StyledWrapper from './Styled/Wrapper.jsx';

/**
 * https://i.imgur.com/ro4Rezs.png
 */
let Drop = (props) => {
	return <StyledWrapper { ...props }>
		<DeleteIcon />
	</StyledWrapper>;
};

Drop = React.memo(Drop);
Drop.defaultProps = {
};
Drop.propTypes = {
};

export default Drop;
