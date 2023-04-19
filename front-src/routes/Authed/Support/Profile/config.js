
const config = {
	form: {
		storeName: 'authed-job-profile',
		id: 'authed-job-profile',
		apiUrl: process.env.URL_API_SUPPORT,
		pageUrl: `/${process.env.ROUTE_AUTHED}/${process.env.ROUTE_SUPPORT}/${process.env.ROUTE_PROFILE}`,
	},
};

export default config;
