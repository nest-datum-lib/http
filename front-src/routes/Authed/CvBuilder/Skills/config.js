
const config = {
	form: {
		storeName: 'cv-builder-skills',
		id: 'cv-builder-skills',
		apiUrl: `${process.env.URL_API_SSO}/user`,
		apiListUrl: `${process.env.URL_API_JOB_DICTIONARY}/skill`,
		pageUrl: `/${process.env.ROUTE_AUTHED}/${process.env.ROUTE_CV_BUILDER}/${process.env.ROUTE_SKILLS}`,
		nextPageUrl: `/${process.env.ROUTE_AUTHED}/${process.env.ROUTE_CV_BUILDER}/${process.env.ROUTE_DESIRABLE_WORKPLACE}`,
		prevPageUrl: `/${process.env.ROUTE_AUTHED}/${process.env.ROUTE_CV_BUILDER}/${process.env.ROUTE_EDUCATION}`,
		displaySteppers: true,
	},
};

export default config;
