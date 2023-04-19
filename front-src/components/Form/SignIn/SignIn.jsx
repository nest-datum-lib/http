import React from 'react';
import PropTypes from 'prop-types';
import { 
	ContextApp,
	ContextRoute, 
} from '@nest-datum-ui/Context';
import { actionSsoLogin } from '@nest-datum-ui-admin-lib/sso';
import Grid from '@mui/material/Grid';
import Field from '@nest-datum-ui/Field';
import InputEmail from 'components/Input/Email';
import InputPassword from 'components/Input/Password';
import TypographyTitle from 'components/Typography/Title';
import TypographyInfo from 'components/Typography/Info';
import ButtonGoogle from 'components/Button/Google';
import ButtonFacebook from 'components/Button/Facebook';
import ButtonPrimary from 'components/Button/Primary';
import StyledWrapper from './Styled/Wrapper.jsx';

let SignIn = ({ onSubmit, ...props }) => {
	const routeName = React.useContext(ContextRoute);
	const { [routeName]: { form: { storeName, id, apiUrl } } } = React.useContext(ContextApp);
	const onSubmitWrapper = React.useCallback((e) => {
		actionSsoLogin(storeName, apiUrl);
		onSubmit(e);
	}, [
		onSubmit,
		storeName,
		apiUrl,
	]);

	return <StyledWrapper { ...props }
		storeName={storeName} 
		id={id} 
		onSubmit={onSubmitWrapper}>
		<Grid container className="googleFbBtnsBox">
			<Grid
				item
				xs={false}>
				<ButtonGoogle />
			</Grid>
			<Grid
				item
				xs={false}>
				<ButtonFacebook />
			</Grid>
		</Grid>
		<TypographyTitle className="titleOr">
			or
		</TypographyTitle>
		<Grid className="inputsBox">
			<Field 
				Component={InputEmail}
				form={id}
				name="login" />
			<Field 
				Component={InputPassword}
				form={id}
				name="password" />
		</Grid>
		<TypographyInfo className="infoText">
			By sign in an account you understand<br />
			and agree to <a href="/">HAPP’s Terms</a>. You also acknowledge<br />
			our <a href="/">Cookie</a> and <a href="/">Privacy policies</a>.
		</TypographyInfo>
		<ButtonPrimary type="submit" form={id}>
			Next Step
		</ButtonPrimary>
	</StyledWrapper>;
};

SignIn = React.memo(SignIn);
SignIn.defaultProps = {
	onSubmit: () => {},
};
SignIn.propTypes = {
	onSubmit: PropTypes.func,
};

export default SignIn;
