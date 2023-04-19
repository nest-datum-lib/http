
const config = {
	form: {
		storeName: 'cv-builder-language',
		id: 'cv-builder-language',
		pageUrl: `/${process.env.ROUTE_AUTHED}/${process.env.ROUTE_CV_BUILDER}/${process.env.ROUTE_LANGUAGE}`,
		apiUrl: `${process.env.URL_API_SSO}/user`,
	},
};

export default config;
