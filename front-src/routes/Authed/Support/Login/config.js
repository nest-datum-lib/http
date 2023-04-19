
const config = {
	form: {
		storeName: 'authed-job-login',
		id: 'authed-job-login',
		pageUrl: `/${process.env.ROUTE_AUTHED}/${process.env.ROUTE_SUPPORT}/${process.env.ROUTE_LOGIN}`,
		apiUrl: process.env.URL_API_SUPPORT,
	},
};

export default config;
