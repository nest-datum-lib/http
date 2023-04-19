import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { selectorMainExtract } from '@nest-datum-ui/Store';
import configSignIn from '@nest-datum-ui-admin-lib/sso/src/config/signIn.js';
import ButtonLink from '@nest-datum-ui/Button/Link';
import ButtonHeader from 'components/Button/Header';
import StyledWrapper from './Styled/Wrapper.jsx';
import StyledGrid from './Styled/Grid.jsx';

let Header = (props) => {
	const { pathname } = useLocation();
	const userId = useSelector(selectorMainExtract([ 'api', 'form', configSignIn.form.storeName, 'id' ]));

	return <StyledWrapper container>
		<StyledGrid
			item
			xs={false}>
			<ButtonHeader
				component={ButtonLink}
				to={`/${process.env.ROUTE_AUTHED}`}>
				Dashboard
			</ButtonHeader>
		</StyledGrid>
		<StyledGrid
			item
			xs={false}>
			<ButtonHeader
				component={ButtonLink}
				to={`/${process.env.ROUTE_AUTHED}/${userId}`}
				active={pathname.indexOf(`/${process.env.ROUTE_AUTHED}/${userId}`) === 0}>
				Profile
			</ButtonHeader>
		</StyledGrid>
		<StyledGrid
			item
			xs={false}>
			<ButtonHeader
				component={ButtonLink}
				to={`/${process.env.ROUTE_AUTHED}/${process.env.ROUTE_JOBS}`}>
				Jobs
			</ButtonHeader>
		</StyledGrid>
	</StyledWrapper>;
};

Header = React.memo(Header);
Header.defaultProps = {
};
Header.propTypes = {
};

export default Header;
