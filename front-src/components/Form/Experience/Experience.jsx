import React from 'react';
import PropTypes from 'prop-types';
import { 
	ContextApp,
	ContextRoute, 
} from '@nest-datum-ui/Context';
import Grid from '@mui/material/Grid';
import Field from '@nest-datum-ui/Field';
import ButtonMenu from 'components/Button/Menu';
import ButtonSecondary from 'components/Button/Secondary';
import ButtonPrimary from 'components/Button/Primary';
import InputText from 'components/Input/Text';
import InputDateRange from 'components/Input/DateRange';
import Checkbox from 'components/Checkbox';
import StyledWrapper from './Styled/Wrapper.jsx';
import handlerSubmit from './handler/submit.js';

/**
 * https://i.imgur.com/eewdqCL.png
 */
let Experience = ({ onSubmit, ...props }) => {
	const routeName = React.useContext(ContextRoute);
	const { [routeName]: { form: { storeName, id, apiUrl, nextPageUrl } } } = React.useContext(ContextApp);
	const onSubmitWrapper = React.useCallback((e) => {
		handlerSubmit(e, storeName, apiUrl, nextPageUrl);
		onSubmit(e);
	}, [
		storeName,
		apiUrl,
		nextPageUrl,
		onSubmit,
	]);

	return <StyledWrapper { ...props }
		storeName={storeName} 
		id={id} 
		onSubmit={onSubmitWrapper}>
		<Field
			Component={InputText}
			form={id}
			name="lastExperienceTitle"
			placeholder="Title" />
		<Field
			Component={InputText}
			form={id}
			name="lastExperienceCompany"
			placeholder="Company" />
		<Field
			Component={InputDateRange}
			form={id}
			name="lastExperienceDateRange"
			className="dateRange-form" />
		<Field
			Component={Checkbox}
			form={id}
			name="lastExperienceInProgress"
			label="Currently work here"
			className="checkbox-form"
			type="checkbox" />
		<Field
			Component={InputText}
			form={id}
			name="lastExperienceAchievemets"
			placeholder="Achievemets"
			rows={3}
			className="textarea-form"
			multiline />
		<ButtonMenu>
			Save and add another position
		</ButtonMenu>
		<Grid container className="btns-form">
			<Grid
				item
				xs={false}>
				<ButtonSecondary to={`/${process.env.ROUTE_AUTHED}/${process.env.ROUTE_CV_BUILDER}/${process.env.ROUTE_PHONE}`}>
					Cancel
				</ButtonSecondary>
			</Grid>
			<Grid
				item
				xs={false}>
				<ButtonPrimary onClick={onSubmitWrapper}>
					Save and Continue
				</ButtonPrimary>
			</Grid>
		</Grid>
	</StyledWrapper>;
};

Experience = React.memo(Experience);
Experience.defaultProps = {
	onSubmit: () => {},
};
Experience.propTypes = {
	onSubmit: PropTypes.func,
};

export default Experience;
