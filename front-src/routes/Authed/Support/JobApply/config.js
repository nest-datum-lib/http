
const config = {
	form: {
		storeName: 'authed-job-apply',
		id: 'authed-job-apply',
		pageUrl: `/${process.env.ROUTE_AUTHED}/${process.env.ROUTE_SUPPORT}/${process.env.ROUTE_JOB_APPLY}`,
		apiUrl: process.env.URL_API_SUPPORT,
	},
};

export default config;
