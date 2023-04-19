import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import StyledWrapper from './Styled/Wrapper.jsx';

/**
 * https://i.imgur.com/8MUKMpS.png
 */
let Close = (props) => {
	return <StyledWrapper { ...props }>
		<CloseIcon />
	</StyledWrapper>;
};

Close = React.memo(Close);
Close.defaultProps = {
};
Close.propTypes = {
};

export default Close;
