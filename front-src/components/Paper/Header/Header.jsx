import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { selectorMainExtract } from '@nest-datum-ui/Store';
import configSignIn from '@nest-datum-ui-admin-lib/sso/src/config/signIn.js';
import Grid from '@mui/material/Grid';
import AvatarHeader from 'components/Avatar/Header';
import IconButtonLogo from 'components/IconButton/Logo';
import IconButtonNotice from 'components/IconButton/Notice';
import IconButtonSetting from 'components/IconButton/Setting';
import ButtonHeaderLink from 'components/Button/Header/Link';
import StyledWrapper from './Styled/Wrapper.jsx';
import StyledGrid from './Styled/Grid.jsx';
import LogoGrid from './Styled/LogoGrid.jsx';
import MenuGrid from './Styled/MenuGrid.jsx';
import UserMenuGrid from './Styled/UserMenuGrid.jsx';

let Header = ({ cvBuilderRoutesFlag, children, storeName, ...props }) => {
	const { pathname } = useLocation();
	const authFlag = useSelector(selectorMainExtract([ 'api', 'form', configSignIn.form.storeName, 'authFlag' ]));
	const hideManagerSection = pathname.indexOf(`/${process.env.ROUTE_AUTHED}/${process.env.ROUTE_CV_BUILDER}`) === 0;
	let hideSignInBtn = pathname.indexOf(`/${process.env.ROUTE_SiGN_IN}`) === 0 || pathname.indexOf(`/${process.env.ROUTE_RECOVERY}`) === 0;

	return <StyledWrapper>
		<StyledGrid container>
			<LogoGrid item>
				<IconButtonLogo />
			</LogoGrid>
			{(!hideManagerSection && !cvBuilderRoutesFlag) && (authFlag
				? <React.Fragment>
					<MenuGrid item>
						{children}
					</MenuGrid>
					<UserMenuGrid item>
						<UserMenuGrid container className="paper-header__manage-section authed">
							<Grid item>
								<IconButtonNotice />
							</Grid>
							<Grid item>
								<AvatarHeader />
							</Grid>
							<Grid item>
								<IconButtonSetting />
							</Grid>
						</UserMenuGrid>
					</UserMenuGrid>
				</React.Fragment>
				: <UserMenuGrid item>
					<UserMenuGrid container className="paper-header__manage-section no-authed">
						<Grid item>
							{!hideSignInBtn && <ButtonHeaderLink to={`/${process.env.ROUTE_SiGN_IN}`}>
								Sign In
							</ButtonHeaderLink>}
						</Grid>
					</UserMenuGrid>
				</UserMenuGrid>)}
		</StyledGrid>
	</StyledWrapper>;
};

Header = React.memo(Header);
Header.defaultProps = {
	storeName: 'form-sign-in',
};
Header.propTypes = {
};

export default Header;
