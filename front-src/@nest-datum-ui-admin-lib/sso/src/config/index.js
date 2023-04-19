import signIn from './signIn.js';
import signUp from './signUp.js';
import recovery from './recovery.js';
import reset from './reset.js';
import verify from './verify.js';
import users from './users.js';
import roles from './roles.js';
import accesses from './accesses.js';
import settings from './settings.js';

const config = {
	name: 'sso',
	pagePrefixUrl: 'app',
	pageSeparateBaseUrl: 'sso',
	pageBaseUrl: 'sso',
	pageInitialUrl: 'users',
	apiBaseUrl: process.env.URL_API_SSO,
	apiRefreshUrl: process.env.URL_API_SSO +'/user/refresh',
	title: 'SSO',
	routes: {
		signIn,
		signUp,
		recovery,
		reset,
		verify,
		users,
		roles,
		accesses,
		settings,
	},
};

export default config;
