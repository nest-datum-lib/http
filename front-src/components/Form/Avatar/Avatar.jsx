import React from 'react';
import PropTypes from 'prop-types';
import { 
	ContextApp,
	ContextRoute, 
} from '@nest-datum-ui/Context';
import Field from '@nest-datum-ui/Field';
import InputImage from 'components/Input/Image';
import StyledWrapper from './Styled/Wrapper.jsx';
import handlerSubmit from './handler/submit.js';

let Avatar = ({ onSubmit, ...props }) => {
	const routeName = React.useContext(ContextRoute);
	const { [routeName]: { form: { storeName, id, apiUrl } } } = React.useContext(ContextApp);
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
			Component={InputImage}
			form={id}
			name="avatar" />
	</StyledWrapper>;
};

Avatar = React.memo(Avatar);
Avatar.defaultProps = {
	onSubmit: () => {},
};
Avatar.propTypes = {
	onSubmit: PropTypes.func,
};

export default Avatar;
