
const config = {
	form: {
		storeName: 'cv-builder-phone',
		id: 'cv-builder-phone',
		apiUrl: `${process.env.URL_API_SSO}/user`,
		pageUrl: `/${process.env.ROUTE_AUTHED}/${process.env.ROUTE_CV_BUILDER}/${process.env.ROUTE_PHONE}`,
		nextPageUrl: `/${process.env.ROUTE_AUTHED}/${process.env.ROUTE_CV_BUILDER}/${process.env.ROUTE_EXPERIENCE}`,
		displaySteppers: true,
	},
};

export default config;
