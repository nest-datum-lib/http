
const config = {
	form: {
		storeName: 'cv-builder-relocate',
		id: 'cv-builder-relocate',
		pageUrl: `/${process.env.ROUTE_AUTHED}/${process.env.ROUTE_CV_BUILDER}/${process.env.ROUTE_RELOCATE}`,
		apiUrl: `${process.env.URL_API_SSO}/user`,
	},
};

export default config;
