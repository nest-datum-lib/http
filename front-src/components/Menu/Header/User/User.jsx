import React from 'react';
import PropTypes from 'prop-types';
import { actionMenuClose } from '@nest-datum-ui/Store';
import ButtonMenu from '@nest-datum-ui/Button/Menu';
import StyledWrapper from './Styled/Wrapper.jsx';

let User = ({
	id,
	onClose,
	...props
}) => {
	const onCloseWrapper = React.useCallback((e) => {
		actionMenuClose()();
		onClose(e);
	}, [
		onClose,
	]);

	return <StyledWrapper id={id} { ...props }>
		<ButtonMenu onClick={onCloseWrapper}>
			Settings
		</ButtonMenu>
		<ButtonMenu to={`/${process.env.ROUTE_AUTHED}/${process.env.ROUTE_SUPPORT}`} onClick={onCloseWrapper}>
			Support
		</ButtonMenu>
		<ButtonMenu onClick={onCloseWrapper} sx={{ color: '#D03375' }}>
			Sign Out
		</ButtonMenu>
	</StyledWrapper>;
};

User = React.memo(User);
User.defaultProps = {
	onClose: () => {},
};
User.propTypes = {
	id: PropTypes.string.isRequired,
	onClose: PropTypes.func,
};

export default User;
