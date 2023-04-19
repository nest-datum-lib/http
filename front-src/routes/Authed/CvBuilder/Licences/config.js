
const config = {
	form: {
		storeName: 'cv-builder-licences',
		id: 'cv-builder-licences',
		apiUrl: `${process.env.URL_API_SSO}/user`,
		pageUrl: `/${process.env.ROUTE_AUTHED}/${process.env.ROUTE_CV_BUILDER}/${process.env.ROUTE_DOCS}/${process.env.ROUTE_LICENCES}`,
	},
};

export default config;
