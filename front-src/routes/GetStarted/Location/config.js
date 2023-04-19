
const config = {
	form: {
		storeName: 'get-started-job-location',
		id: 'get-started-job-location',
		apiUrl: `${process.env.URL_API_SSO}/user`,
		nextPageUrl: `/${process.env.ROUTE_GET_STARTED}/${process.env.ROUTE_QUICK_OFFERS}`,
	},
};

export default config;
