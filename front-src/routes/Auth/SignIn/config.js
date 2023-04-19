
const config = {
	form: {
		storeName: 'auth-sign-in',
		id: 'auth-sign-in',
		apiUrl: `${process.env.URL_API_SSO}/user/login`,
		nextPageUrl: `/${process.env.ROUTE_AUTHED}`,
	},
};

export default config;
