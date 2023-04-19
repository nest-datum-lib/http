import React from 'react';
import { useSelector } from 'react-redux';
import { 
	ContextApp,
	ContextRoute, 
} from '@nest-datum-ui/Context';
import { selectorMainExtract } from '@nest-datum-ui/Store';
import Grid from '@mui/material/Grid';
import Field from '@nest-datum-ui/Field';
import InputText from 'components/Input/Text';
import DateRange from 'components/Input/DateRange';
import Checkbox from 'components/Checkbox';
import ButtonPrimary from 'components/Button/Primary';
import ButtonSecondary from 'components/Button/Secondary';
import ButtonMenu from 'components/Button/Menu';
import StyledWrapper from './Styled/Wrapper.jsx';
import handlerSubmit from './handler/submit.js';

/**
 * https://i.imgur.com/r1M7o6I.png
 */
let Certificates = (props) => {
	const routeName = React.useContext(ContextRoute);
	const { [routeName]: { form: { storeName, id, apiUrl } } } = React.useContext(ContextApp);
	const userId = useSelector(selectorMainExtract([ 'api', 'form', 'sso-sign-in', 'id' ]));
	const onSubmitWrapper = React.useCallback((e) => {
		handlerSubmit(e, storeName, apiUrl);
	}, [
		storeName,
		apiUrl,
	]);
	const onSubmitAddingWrapper = React.useCallback((e) => {
		handlerSubmit(e, storeName, apiUrl, true);
	}, [
		storeName,
		apiUrl,
	]);

	return <StyledWrapper { ...props }
		storeName={storeName} 
		id={id} 
		onSubmit={onSubmitWrapper}>
		<Field
			Component={InputText}
			form={id}
			name="name"
			placeholder="Certificate Name" />
		<Field
			Component={InputText}
			form={id}
			name="issuing"
			placeholder="Issuing Authority" />
		<Field
			Component={DateRange}
			form={id}
			name="expirationAt"
			className="paper-certificates_date-range"
			startInputProps={{ placeholder: "Date of issue" }}
			endInputProps={{ placeholder: "Expiration Date" }} />
		<Field
			Component={Checkbox}
			form={id}
			name="isExpired"
			label="Does not Expire"
			className="checkbox-form"
			type="checkbox" />
		<ButtonMenu onClick={onSubmitAddingWrapper}>
			Save and add another one
		</ButtonMenu>
		<Grid container className="btns-form">
			<Grid
				item
				xs={false}>
				<ButtonSecondary to={`/${process.env.ROUTE_AUTHED}/${userId}/${process.env.ROUTE_EXPERIENCE}`}>
					Cancel
				</ButtonSecondary>
			</Grid>
			<Grid
				item
				xs={false}>
				<ButtonPrimary type="submit" form={id}>
					Save
				</ButtonPrimary>
			</Grid>
		</Grid>
	</StyledWrapper>;
};

Certificates = React.memo(Certificates);
Certificates.defaultProps = {
};
Certificates.propTypes = {
};

export default Certificates;
