
const config = {
	form: {
		storeName: 'cv-builder-experience',
		id: 'cv-builder-experience',
		apiUrl: `${process.env.URL_API_SSO}/user`,
		pageUrl: `/${process.env.ROUTE_AUTHED}/${process.env.ROUTE_CV_BUILDER}/${process.env.ROUTE_EXPERIENCE}`,
		nextPageUrl: `/${process.env.ROUTE_AUTHED}/${process.env.ROUTE_CV_BUILDER}/${process.env.ROUTE_EDUCATION}`,
		displaySteppers: true,
	},
};

export default config;
