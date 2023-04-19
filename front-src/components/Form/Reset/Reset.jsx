import React from 'react';
import PropTypes from 'prop-types';
import { 
	ContextApp,
	ContextRoute, 
} from '@nest-datum-ui/Context';
import { actionSsoReset } from '@nest-datum-ui-admin-lib/sso';
import Field from '@nest-datum-ui/Field';
import InputPassword from 'components/Input/Password';
import ButtonPrimary from 'components/Button/Primary';
import StyledWrapper from './Styled/Wrapper.jsx';

let Reset = ({ onSubmit, ...props }) => {
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
			Component={InputPassword}
			form={id}
			name="password"
			label="New Password"
			required />
		<Field
			Component={InputPassword}
			form={id}
			name="repeatedPassword"
			label="Repeat password"
			required />
		<ButtonPrimary type="submit" form={id}>
			Save New Password
		</ButtonPrimary>
	</StyledWrapper>;
};

Reset = React.memo(Reset);
Reset.defaultProps = {
	onSubmit: () => {},
};
Reset.propTypes = {
	onSubmit: PropTypes.func,
};

export default Reset;
