
const config = {
	form: {
		storeName: 'cv-builder-pay',
		id: 'cv-builder-pay',
		pageUrl: `/${process.env.ROUTE_AUTHED}/${process.env.ROUTE_CV_BUILDER}/${process.env.ROUTE_PAY}`,
		apiUrl: `${process.env.URL_API_SSO}/user`,
	},
};

export default config;
