
const config = {
	form: {
		storeName: 'authed-job-alert',
		id: 'authed-job-alert',
		pageUrl: `/${process.env.ROUTE_AUTHED}/${process.env.ROUTE_SUPPORT}/${process.env.ROUTE_JOB_ALERT}`,
		apiUrl: process.env.URL_API_SUPPORT,
	},
};

export default config;
