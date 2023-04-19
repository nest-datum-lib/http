import React from 'react';
import TypographyTitle from 'components/Typography/Title';
import Typography from 'components/Typography';
import FormReset from 'components/Form/Reset';
import StyledWrapper from './Styled/Wrapper.jsx';

let Reset = (props) => {
	return <StyledWrapper { ...props }>
		<TypographyTitle>
			Reset password
		</TypographyTitle>
		<Typography>
			Enter new password<br />
			for your account
		</Typography>
		<FormReset />
	</StyledWrapper>;
};

Reset = React.memo(Reset);
Reset.defaultProps = {
};
Reset.propTypes = {
};

export default Reset;
