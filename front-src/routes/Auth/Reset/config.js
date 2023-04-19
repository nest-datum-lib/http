
const config = {
	form: {
		storeName: 'auth-reset',
		id: 'auth-reset',
		apiUrl: `${process.env.URL_API_SSO}/user/reset`,
		nextPageUrl: `/${process.env.ROUTE_AUTHED}`,
	},
};

export default config;
