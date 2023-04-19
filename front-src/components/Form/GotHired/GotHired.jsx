import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { 
	ContextApp,
	ContextRoute, 
} from '@nest-datum-ui/Context';
import { selectorMainExtract } from '@nest-datum-ui/Store';
import Grid from '@mui/material/Grid';
import Field from '@nest-datum-ui/Field';
import ButtonSecondary from 'components/Button/Secondary';
import ButtonPrimary from 'components/Button/Primary';
import InputText from 'components/Input/Text';
import InputDate from 'components/Input/Date';
import InputFullName from 'components/Input/FullName';
import InputEmail from 'components/Input/Email';
import Checkbox from 'components/Checkbox';
import StyledWrapper from './Styled/Wrapper.jsx';
import handlerSubmit from './handler/submit.js';

/**
 * https://i.imgur.com/s783Olx.png
 */
let GotHired = ({ onSubmit, ...props }) => {
	const routeName = React.useContext(ContextRoute);
	const { [routeName]: { form: { storeName, id, apiUrl } } } = React.useContext(ContextApp);
	const { userId } = useParams();
	const withHapp = useSelector(selectorMainExtract([ 'api', 'form', storeName, 'withHapp' ]));
	const onSubmitWrapper = React.useCallback((e) => {
		handlerSubmit(e, storeName, apiUrl);
		onSubmit(e);
	}, [
		storeName,
		apiUrl,
		onSubmit,
	]);

	return <StyledWrapper { ...props }
		storeName={storeName} 
		id={id} 
		onSubmit={onSubmitWrapper}>
		<Field
			Component={Checkbox}
			form={id}
			name="withHapp"
			label="Found a Job with HAPP"
			className="checkbox-form" />
		<Field
			Component={InputText}
			form={id}
			name="title"
			placeholder="Job Title" />
		<Field
			Component={InputText}
			form={id}
			name="company"
			placeholder="Company" />
		<Field
			Component={InputDate}
			form={id}
			name="startDate"
			className="date-form"
			placeholder="Start date" />
		{withHapp
			&& <React.Fragment>
				<Field
					Component={InputFullName}
					form={id}
					name="contactName"
					label="Contact Name (recruiter)" />
				<Field 
					Component={InputEmail}
					form={id}
					name="email"
					label="Contact E-mail (recruiter)" />
			</React.Fragment>}
		<Grid container className="btns-form">
			<Grid
				item
				xs={false}>
				<ButtonSecondary to={`/${process.env.ROUTE_AUTHED}/${userId}`}>
					Cancel
				</ButtonSecondary>
			</Grid>
			<Grid
				item
				xs={false}>
				<ButtonPrimary onClick={onSubmitWrapper}>
					Save
				</ButtonPrimary>
			</Grid>
		</Grid>
	</StyledWrapper>;
};

GotHired = React.memo(GotHired);
GotHired.defaultProps = {
	onSubmit: () => {},
};
GotHired.propTypes = {
	onSubmit: PropTypes.func,
};

export default GotHired;
