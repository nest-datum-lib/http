
const config = {
	form: {
		storeName: 'cv-builder-education',
		id: 'cv-builder-education',
		apiUrl: `${process.env.URL_API_SSO}/user`,
		pageUrl: `/${process.env.ROUTE_AUTHED}/${process.env.ROUTE_CV_BUILDER}/${process.env.ROUTE_EDUCATION}`,
		nextPageUrl: `/${process.env.ROUTE_AUTHED}/${process.env.ROUTE_CV_BUILDER}/${process.env.ROUTE_SKILLS}`,
		displaySteppers: true,
	},
};

export default config;
