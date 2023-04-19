import React from 'react';
import { useSelector } from 'react-redux';
import { 
	ContextApp,
	ContextRoute, 
} from '@nest-datum-ui/Context';
import { 
	selectorMainExtract,
	actionApiFormProp, 
	hookUrlNavigate,
} from '@nest-datum-ui/Store';
import { actionSsoRegister } from '@nest-datum-ui-admin-lib/sso';
import Grid from '@mui/material/Grid';
import Field from '@nest-datum-ui/Field';
import TypographyTitle from 'components/Typography/Title';
import TypographySubtitle from 'components/Typography/Subtitle';
import TypographyInfo from 'components/Typography/Info';
import InputEmail from 'components/Input/Email';
import InputFirstName from 'components/Input/FirstName';
import InputLastName from 'components/Input/LastName';
import InputPassword from 'components/Input/Password';
import ButtonGoogle from 'components/Button/Google';
import ButtonFacebook from 'components/Button/Facebook';
import ButtonPrimary from 'components/Button/Primary';
import StyledWrapper from './Styled/Wrapper.jsx';
import handlerFirstStep from './handler/firstStep.js';

let SignUp = (props) => {
	const routeName = React.useContext(ContextRoute);
	const { [routeName]: { form: { storeName, id, apiUrl, nextPageUrl } } } = React.useContext(ContextApp);
	const [ step, setStep ] = React.useState(() => 0);
	const email = useSelector(selectorMainExtract([ 'api', 'form', storeName, 'email' ]));
	const onFirstStep = React.useCallback((e) => {
		handlerFirstStep(e, storeName, apiUrl, setStep);
	}, [
		storeName,
		apiUrl,
		setStep,
	]);
	const onSecondStep = React.useCallback((e) => {
		actionApiFormProp(storeName, 'login', email)(() => {
			actionSsoRegister(storeName, apiUrl)(() => {
				hookUrlNavigate(nextPageUrl);

				setTimeout(() => actionApiFormProp(storeName, 'loader', false)(), 0);
			});
		});
	}, [
		storeName,
		apiUrl,
		email,
		nextPageUrl,
	]);
	const steps = [ onFirstStep, onSecondStep ];

	return <StyledWrapper { ...props }
		storeName={storeName} 
		id={id} 
		onSubmit={steps[step]}>
		{(step > 0 && email)
			? <React.Fragment>
				<TypographySubtitle className="emailSubtitle">
					{email}
				</TypographySubtitle>
				<Grid className="inputsBox">
					<Field
						Component={InputPassword}
						form={id}
						label="Enter Password"
						name="password" />
					<Field
						Component={InputPassword}
						form={id}
						label="Confirm Password"
						name="repeatedPassword" />
				</Grid>
				<TypographyInfo className="infoText">
					By creating an account you understand<br />
					and agree to <a href="/">HAPP’s Terms</a>. You also acknowledge<br />
					our <a href="/">Cookie</a> and <a href="/">Privacy policies</a>.
				</TypographyInfo>
				<ButtonPrimary form={id} type="submit">
					Sign Up
				</ButtonPrimary>
			</React.Fragment>
			: <React.Fragment>
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
						name="email" />
					<Field 
						Component={InputFirstName}
						form={id}
						name="firstname" />
					<Field 
						Component={InputLastName}
						form={id}
						name="lastname" />
				</Grid>
				<ButtonPrimary form={id} type="submit">
					Next Step
				</ButtonPrimary>
			</React.Fragment>}
	</StyledWrapper>;
};

SignUp = React.memo(SignUp);
SignUp.defaultProps = {
};
SignUp.propTypes = {
};

export default SignUp;
