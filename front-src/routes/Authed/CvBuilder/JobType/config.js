
const config = {
	form: {
		storeName: 'cv-builder-job-type',
		id: 'cv-builder-job-type',
		pageUrl: `/${process.env.ROUTE_AUTHED}/${process.env.ROUTE_CV_BUILDER}/${process.env.ROUTE_JOB_TYPE}`,
		apiUrl: `${process.env.URL_API_SSO}/user`,
	},
};

export default config;
