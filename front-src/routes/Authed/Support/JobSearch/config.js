
const config = {
	form: {
		storeName: 'authed-job-search',
		id: 'authed-job-search',
		pageUrl: `/${process.env.ROUTE_AUTHED}/${process.env.ROUTE_SUPPORT}/${process.env.ROUTE_JOB_SEARCH}`,
		apiUrl: process.env.URL_API_SUPPORT,
	},
};

export default config;
