
const config = {
	form: {
		storeName: 'cv-builder-desirableWorkplace',
		id: 'cv-builder-desirableWorkplace',
		apiUrl: `${process.env.URL_API_SSO}/user`,
		pageUrl: `/${process.env.ROUTE_AUTHED}/${process.env.ROUTE_CV_BUILDER}/${process.env.ROUTE_DESIRABLE_WORKPLACE}`,
		nextPageUrl: `/${process.env.ROUTE_AUTHED}/${process.env.ROUTE_CV_BUILDER}/${process.env.ROUTE_COMPLETE}`,
		displaySteppers: true,
	},
};

export default config;

