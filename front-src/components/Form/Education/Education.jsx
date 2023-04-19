import React from 'react';
import PropTypes from 'prop-types';
import { 
	ContextApp,
	ContextRoute, 
} from '@nest-datum-ui/Context';
import Field from '@nest-datum-ui/Field';
import InputText from 'components/Input/Text';
import InputDateRange from 'components/Input/DateRange';
import Checkbox from 'components/Checkbox';
import ButtonPrimary from 'components/Button/Primary';
import StyledWrapper from './Styled/Wrapper.jsx';
import handlerSubmit from './handler/submit.js';

/**
 * https://i.imgur.com/wD8k3vE.png
 */
let Education = ({ onSubmit, ...props }) => {
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
			name="educationDegree"
			placeholder="Degree" />
		<Field
			Component={InputText}
			form={id}
			name="educationStudyField"
			placeholder="Field of Study" />
		<Field
			Component={InputText}
			form={id}
			name="educationSchool"
			placeholder="School" />
		<Field
			Component={InputDateRange}
			form={id}
			name="educationDateRange"
			className="dateRange-form" />
		<Field
			Component={Checkbox}
			form={id}
			name="educationInProgress"
			label="Currently in progress"
			className="checkbox-form"
			type="checkbox" />
		<Field
			Component={InputText}
			form={id}
			name="educationAchievemets"
			placeholder="Achievemets"
			className="textarea-form"
			rows={3}
			multiline />
		<ButtonPrimary onClick={onSubmitWrapper}>
			Save and Continue
		</ButtonPrimary>
	</StyledWrapper>;
};

Education = React.memo(Education);
Education.defaultProps = {
	onSubmit: () => {},
};
Education.propTypes = {
	onSubmit: PropTypes.func,
};

export default Education;
