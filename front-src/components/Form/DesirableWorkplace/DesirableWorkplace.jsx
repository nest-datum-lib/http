import React from 'react';
import PropTypes from 'prop-types';
import { 
	ContextApp,
	ContextRoute, 
} from '@nest-datum-ui/Context';
import Field from '@nest-datum-ui/Field';
import TypographyBody from 'components/Typography/Body';
import ButtonPrimary from 'components/Button/Primary';
import SelectWorkplace from 'components/Select/Workplace';
import SelectWorktype from 'components/Select/Worktype';
import StyledWrapper from './Styled/Wrapper.jsx';
import handlerSubmit from './handler/submit.js';

/**
 * https://i.imgur.com/Q4VeV1n.png
 */
let DesirableWorkplace = ({ onSubmit, ...props }) => {
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
			Component={SelectWorkplace}
			form={id}
			name="preferencesWorkplace"
			label="Remote" />
		<TypographyBody className="titleSecondWorkplace">
			Desirable type of work
		</TypographyBody>
		<Field
			Component={SelectWorktype}
			form={id}
			name="preferencesWorktype"
			label="Type of Work" />
		<ButtonPrimary onClick={onSubmitWrapper}>
			Save and Continue
		</ButtonPrimary>
	</StyledWrapper>;
};

DesirableWorkplace = React.memo(DesirableWorkplace);
DesirableWorkplace.defaultProps = {
	onSubmit: () => {},
};
DesirableWorkplace.propTypes = {
	onSubmit: PropTypes.func,
};

export default DesirableWorkplace;
