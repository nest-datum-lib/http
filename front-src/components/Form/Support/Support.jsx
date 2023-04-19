import React from 'react';
import { 
	ContextApp,
	ContextRoute, 
} from '@nest-datum-ui/Context';
import Field from '@nest-datum-ui/Field';
import InputText from 'components/Input/Text';
import InputEmail from 'components/Input/Email';
import ButtonPrimary from 'components/Button/Primary';
import StyledWrapper from './Styled/Wrapper.jsx';
import handlerSubmit from './handler/submit.js';

/**
 * https://i.imgur.com/zxVCnbp.png
 */
let Support = (props) => {
	const routeName = React.useContext(ContextRoute);
	const { [routeName]: { form: { storeName, id, apiUrl } } } = React.useContext(ContextApp);
	const onSubmitWrapper = React.useCallback((e) => handlerSubmit(e, storeName, apiUrl), [
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
			name="text"
			rows={6}
			multiline />
		<Field
			Component={InputEmail}
			form={id}
			name="email"
			label="Email" />
		<ButtonPrimary type="submit" form={id} fullWidth>
			Send
		</ButtonPrimary>
	</StyledWrapper>;
};

Support = React.memo(Support);
Support.defaultProps = {
};
Support.propTypes = {
};

export default Support;
