
const config = {
	form: {
		storeName: 'cv-builder-certificates',
		id: 'cv-builder-certificates',
		apiUrl: `${process.env.URL_API_SSO}/user`,
		pageUrl: `/${process.env.ROUTE_AUTHED}/${process.env.ROUTE_CV_BUILDER}/${process.env.ROUTE_DOCS}/${process.env.ROUTE_CERTIFICATES}`,
	},
};

export default config;
