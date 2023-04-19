import React from 'react';
import TypographyTitle from 'components/Typography/Title';
import TypographyInfo from 'components/Typography/Info';
import FormSignUp from 'components/Form/SignUp';
import ButtonInfo from 'components/Button/Info';
import StyledWrapper from './Styled/Wrapper.jsx';

let SignUp = (props) => {
	return <StyledWrapper { ...props }>
		<TypographyTitle>
			Create an Account
		</TypographyTitle>
		<FormSignUp />
		<TypographyInfo component="span" className="infoText">
			Already have an account?
		</TypographyInfo>
		<ButtonInfo component="span" to={`/${process.env.ROUTE_SiGN_IN}`}>
			Sign In
		</ButtonInfo>
	</StyledWrapper>;
};

SignUp = React.memo(SignUp);
SignUp.defaultProps = {
};
SignUp.propTypes = {
};

export default SignUp;
