import React from 'react';
import TypographyTitle from 'components/Typography/Title';
import ButtonInfo from 'components/Button/Info';
import FormSignIn from 'components/Form/SignIn';
import StyledWrapper from './Styled/Wrapper.jsx';

let SignIn = (props) => {
	return <StyledWrapper { ...props }>
		<TypographyTitle className="titleSignIn">
			Sign In
		</TypographyTitle>
		<FormSignIn />
		<ButtonInfo className="forgotPasswordBtn" to={`/${process.env.ROUTE_RECOVERY}`}>
			Forgot Password?
		</ButtonInfo>
	</StyledWrapper>;
};

SignIn = React.memo(SignIn);
SignIn.defaultProps = {
};
SignIn.propTypes = {
};

export default SignIn;
