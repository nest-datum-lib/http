
const config = {
	form: {
		storeName: 'cv-builder-upload',
		id: 'cv-builder-upload',
		apiUrl: `${process.env.URL_API_CV}/report`,
		pageUrl: `/${process.env.ROUTE_AUTHED}/${process.env.ROUTE_CV_BUILDER}`,
		nextPageUrl: `/${process.env.ROUTE_AUTHED}/${process.env.ROUTE_CV_BUILDER}/${process.env.ROUTE_PHONE}`,
	},
};

export default config;
