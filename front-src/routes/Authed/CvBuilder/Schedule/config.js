
const config = {
	form: {
		storeName: 'cv-builder-schedule',
		id: 'cv-builder-schedule',
		pageUrl: `/${process.env.ROUTE_AUTHED}/${process.env.ROUTE_CV_BUILDER}/${process.env.ROUTE_SCHEDULE}`,
		apiUrl: `${process.env.URL_API_SSO}/user`,
	},
};

export default config;
