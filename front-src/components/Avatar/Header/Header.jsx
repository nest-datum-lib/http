import React from 'react';
import { actionMenuOpen } from '@nest-datum-ui/Store';
import IconButton from '@mui/material/IconButton';
import MenuHeaderUser from 'components/Menu/Header/User';
import StyledWrapper from './Styled/Wrapper.jsx';

let Header = ({ id, ...props }) => {
	const onMenu = React.useCallback((e) => actionMenuOpen(id, e.target)(), [
		id,
	]);

	return <React.Fragment>
		<StyledWrapper component={IconButton} onClick={onMenu} { ...props } />
		<MenuHeaderUser id={id} />
	</React.Fragment>;
};

Header = React.memo(Header);
Header.defaultProps = {
	id: 'menu-header-user'
};
Header.propTypes = {
};

export default Header;
