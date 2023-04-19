import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectorMainExtract } from '@nest-datum-ui/Store';
import config from '../../config';
import { 
	actionSsoAutoLogin,
	actionSsoRedirectToLogin, 
} from '../../components/Store';

let Authed = ({ storeName, children }) => {
	const { apiRefreshUrl, routes: { signIn: { pageFullUrl } } } = config;
	const autoLoginFlag = useSelector(selectorMainExtract([ 'api', 'form', storeName, 'autoLoginFlag' ]));
	const authFlag = useSelector(selectorMainExtract([ 'api', 'form', storeName, 'authFlag' ]));

	React.useEffect(() => {
		actionSsoAutoLogin(storeName, apiRefreshUrl);
	}, [
		storeName,
		apiRefreshUrl,
	]);

	React.useEffect(() => {
		if (autoLoginFlag === false) {
			actionSsoRedirectToLogin(authFlag, pageFullUrl);
		}
	}, [
		autoLoginFlag,
		authFlag,
		pageFullUrl,
	]);

	return authFlag && (children || <Outlet />);
};

Authed = React.memo(Authed);
Authed.defaultProps = {
	storeName: 'sso-sign-in',
};
Authed.propTypes = {
	storeName: PropTypes.string,
};

export default Authed;
