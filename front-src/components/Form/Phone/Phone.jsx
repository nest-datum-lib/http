import React from 'react';
import PropTypes from 'prop-types';
import { 
	ContextApp,
	ContextRoute, 
} from '@nest-datum-ui/Context';
import Field from '@nest-datum-ui/Field';
import ButtonPrimary from 'components/Button/Primary';
import InputPhone from 'components/Input/Phone';
import StyledWrapper from './Styled/Wrapper.jsx';
import handlerSubmit from './handler/submit.js';
import { ReactComponent as ArrowDown } from 'static/svg/icons/arrowDown-small-light.svg';

/**
 * https://i.imgur.com/JCnVhKO.png
 */
let Phone = ({ onSubmit, ...props }) => {
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
			Component={InputPhone}
			countryProps={{ IconComponent: () => <ArrowDown /> }}
			form={id}
			name="phone" />
		<ButtonPrimary onClick={onSubmitWrapper}>
			Continue
		</ButtonPrimary>
	</StyledWrapper>;
};

Phone = React.memo(Phone);
Phone.defaultProps = {
	onSubmit: () => {},
};
Phone.propTypes = {
	onSubmit: PropTypes.func,
};

export default Phone;
