
const config = {
	form: {
		storeName: 'cv-builder-remote',
		id: 'cv-builder-remote',
		pageUrl: `/${process.env.ROUTE_AUTHED}/${process.env.ROUTE_CV_BUILDER}/${process.env.ROUTE_REMOTE}`,
		apiUrl: `${process.env.URL_API_SSO}/user`,
	},
};

export default config;
