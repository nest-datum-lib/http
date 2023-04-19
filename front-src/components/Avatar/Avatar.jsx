import React from 'react';
import MuiAvatar from '@mui/material/Avatar';
import IconButtonUpload from 'components/IconButton/Upload';
import StyledWrapper from './Styled/Wrapper.jsx';

let Avatar = ({ withUpload, className, ...props }) => {
	return <StyledWrapper className={className}>
		<MuiAvatar { ...props } />
		{(withUpload === true) && <IconButtonUpload />}
	</StyledWrapper>;
};

Avatar = React.memo(Avatar);
Avatar.defaultProps = {
};
Avatar.propTypes = {
};

export default Avatar;
