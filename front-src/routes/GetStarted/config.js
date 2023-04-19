
const config = {
	form: {
		storeName: 'get-started-job-kind',
		id: 'get-started-job-kind',
		apiUrl: `${process.env.URL_API_SSO}/user`,
		nextPageUrl: `/${process.env.ROUTE_GET_STARTED}/${process.env.ROUTE_LOCATION}`,
	},
};

export default config;
