
const config = {
	form: {
		storeName: 'profile-edit',
		id: 'profile-edit',
		apiUrl: `${process.env.URL_API_SSO}/user`,
		cvStatus: {
			storeName: 'cv-status',
			id: 'cv-status',
			apiUrl: `${process.env.URL_API_CV}/report-status`,
		},
	},
};

export default config;
