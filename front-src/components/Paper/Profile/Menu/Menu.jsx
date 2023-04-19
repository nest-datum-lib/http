import React from 'react';
import MenuProfile from 'components/Menu/Profile';
import ButtonSecondary from 'components/Button/Secondary';
import Paper from '../../Paper.jsx';
import Grid from '@mui/material/Grid';
import StyledWrapper from './Styled/Wrapper.jsx';

let Menu = (props) => {
	return <StyledWrapper { ...props }>
		<Paper>
			<MenuProfile />
		</Paper>
		<Grid className="paper-menu-profile_btns-list">
			<ButtonSecondary>
				Review CV
			</ButtonSecondary>
			<ButtonSecondary to={`/${process.env.ROUTE_AUTHED}/cv-builder`}>
				Upload CV
			</ButtonSecondary>
			<ButtonSecondary>
				Download CV
			</ButtonSecondary>
		</Grid>
	</StyledWrapper>;
};

Menu = React.memo(Menu);
Menu.defaultProps = {
};
Menu.propTypes = {
};

export default Menu;
