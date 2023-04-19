
const config = {
	form: {
		storeName: 'auth-sign-up',
		id: 'auth-sign-up',
		apiUrl: `${process.env.URL_API_SSO}/user/register`,
		nextPageUrl: `/${process.env.ROUTE_VERIFY}`,
	},
};

export default config;
