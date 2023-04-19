import React from 'react';
import PropTypes from 'prop-types';
import { 
	ContextApp,
	ContextRoute, 
} from '@nest-datum-ui/Context';
import { actionSsoReset } from '@nest-datum-ui-admin-lib/sso';
import Field from '@nest-datum-ui/Field';
import InputEmail from 'components/Input/Email';
import ButtonPrimary from 'components/Button/Primary';
import StyledWrapper from './Styled/Wrapper.jsx';

let Recovery = ({ onSubmit, ...props }) => {
	const routeName = React.useContext(ContextRoute);
	const { [routeName]: { form: { storeName, id, apiUrl } } } = React.useContext(ContextApp);
	const onSubmitWrapper = React.useCallback((e) => {
		actionSsoReset(storeName, apiUrl);
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
		<Field 
			Component={InputEmail}
			form={id}
			name="email"
			required />
		<ButtonPrimary type="submit" form={id}>
			Reset password
		</ButtonPrimary>
	</StyledWrapper>;
};

Recovery = React.memo(Recovery);
Recovery.defaultProps = {
	onSubmit: () => {},
};
Recovery.propTypes = {
	onSubmit: PropTypes.func,
};

export default Recovery;
