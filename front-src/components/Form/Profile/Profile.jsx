import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { 
	ContextApp,
	ContextRoute, 
} from '@nest-datum-ui/Context';
import Grid from '@mui/material/Grid';
import Field from '@nest-datum-ui/Field';
import ButtonSecondary from 'components/Button/Secondary';
import ButtonPrimary from 'components/Button/Primary';
import InputText from 'components/Input/Text';
import InputFullName from 'components/Input/FullName';
import InputPosition from 'components/Input/Position';
import InputLocation from 'components/Input/Location';
import InputPhone from 'components/Input/Phone';
import InputEmail from 'components/Input/Email';
import SelectCvStatus from 'components/Select/CvStatus';
import { ReactComponent as ArrowDown } from 'static/svg/icons/arrowDown-small-light.svg';
import StyledWrapper from './Styled/Wrapper.jsx';
import handlerSubmit from './handler/submit.js';

let Profile = ({ onSubmit, ...props }) => {
	const routeName = React.useContext(ContextRoute);
	const { [routeName]: { form: { storeName, id, apiUrl, cvStatus } } } = React.useContext(ContextApp);
	const { userId } = useParams();
	const onSubmitWrapper = React.useCallback((e) => {
		handlerSubmit(e, storeName, apiUrl, userId);
		onSubmit(e);
	}, [
		storeName,
		apiUrl,
		userId,
		onSubmit,
	]);

	return <StyledWrapper { ...props }
		storeName={storeName} 
		id={id} 
		onSubmit={onSubmitWrapper}>
		<Field
			Component={InputFullName}
			form={id}
			name="fullName"
			placeholder="Full Name" />
		<Field
			Component={InputPosition}
			form={id}
			name="position"
			placeholder="Position" />
		<Field
			Component={InputLocation}
			form={id}
			name="location"
			placeholder="Location" />
		<Field
			Component={InputPhone}
			countryProps={{ IconComponent: () => <ArrowDown /> }}
			form={id}
			name="phone" />
		<Field 
			Component={InputEmail}
			form={id}
			name="email" />
		<Field
			Component={InputText}
			form={id}
			name="facebook"
			placeholder="Facebook" />
		<Field
			Component={InputText}
			form={id}
			name="linkedin"
			placeholder="Linkedin" />
		<Field
			Component={InputText}
			form={id}
			name="personalWebsite"
			placeholder="Personal Website" />
		<Field
			storeName={cvStatus.storeName}
			apiUrl={cvStatus.apiUrl}
			Component={SelectCvStatus}
			form={id}
			name="cvStatusId" />
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

Profile = React.memo(Profile);
Profile.defaultProps = {
	onSubmit: () => {},
};
Profile.propTypes = {
	onSubmit: PropTypes.func,
};

export default Profile;
