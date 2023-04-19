
const config = {
	form: {
		storeName: 'auth-recovery',
		id: 'auth-recovery',
		apiUrl: `${process.env.URL_API_SSO}/user/recovery`,
		nextPageUrl: `/${process.env.ROUTE_RESET}`,
	},
};

export default config;
