import { createRoot } from 'react-dom/client';
import {
	BrowserRouter,
	Routes,
	Route,
} from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { ContextApp } from '@nest-datum-ui/Context';
import { Provider as ProviderTheme } from '@nest-datum-ui/Theme';
import { Provider as ProviderStore } from '@nest-datum-ui/Store';
import { Provider as ProviderLanguage } from '@nest-datum-ui/Language';
import Layout from 'layouts';
import LayoutGetStarted from 'layouts/GetStarted';
import LayoutAuthed from 'layouts/Authed';
import LayoutAuthedCvBuilder from 'layouts/Authed/CvBuilder';
import LayoutAuthedCvBuilderDocs from 'layouts/Authed/CvBuilder/Docs';
import LayoutAuthedProfile from 'layouts/Authed/Profile';
import LayoutAuthedJob from 'layouts/Authed/Job';
import LayoutAuthedSupport from 'layouts/Authed/Support';
import RouteSystemNotFound from 'routes/System/NotFound';
import RouteHome from 'routes/Home';
import RouteGetStarted from 'routes/GetStarted';
import RouteGetStartedLocation from 'routes/GetStarted/Location';
import RouteGetStartedQuickOffers from 'routes/GetStarted/QuickOffers';
import RouteAuthSignIn from 'routes/Auth/SignIn';
import RouteAuthSignUp from 'routes/Auth/SignUp';
import RouteAuthRecovery from 'routes/Auth/Recovery';
import RouteAuthReset from 'routes/Auth/Reset';
import RouteAuthVerify from 'routes/Auth/Verify';
import RouteAuthedDashboard from 'routes/Authed/Dashboard';
import RouteAuthedSupport from 'routes/Authed/Support';
import RouteAuthedSupportLogin from 'routes/Authed/Support/Login';
import RouteAuthedSupportProfile from 'routes/Authed/Support/Profile';
import RouteAuthedSupportJobSearch from 'routes/Authed/Support/JobSearch';
import RouteAuthedSupportJobApply from 'routes/Authed/Support/JobApply';
import RouteAuthedSupportJobAlert from 'routes/Authed/Support/JobAlert';
import RouteAuthedSupportPrivacy from 'routes/Authed/Support/Privacy';
import RouteAuthedJob from 'routes/Authed/Job';
import RouteAuthedJobItem from 'routes/Authed/Job/Item';
import RouteAuthedCvBuilder from 'routes/Authed/CvBuilder';
import RouteAuthedCvBuilderPhone from 'routes/Authed/CvBuilder/Phone';
import RouteAuthedCvBuilderExperience from 'routes/Authed/CvBuilder/Experience';
import RouteAuthedCvBuilderEducation from 'routes/Authed/CvBuilder/Education';
import RouteAuthedCvBuilderSkills from 'routes/Authed/CvBuilder/Skills';
import RouteAuthedCvBuilderDesirableWorkplace from 'routes/Authed/CvBuilder/DesirableWorkplace';
import RouteAuthedCvBuilderLicences from 'routes/Authed/CvBuilder/Licences';
import RouteAuthedCvBuilderCertificates from 'routes/Authed/CvBuilder/Certificates';
import RouteAuthedCvBuilderLanguage from 'routes/Authed/CvBuilder/Language';
import RouteAuthedCvBuilderJobType from 'routes/Authed/CvBuilder/JobType';
import RouteAuthedCvBuilderPay from 'routes/Authed/CvBuilder/Pay';
import RouteAuthedCvBuilderRelocate from 'routes/Authed/CvBuilder/Relocate';
import RouteAuthedCvBuilderRemote from 'routes/Authed/CvBuilder/Remote';
import RouteAuthedCvBuilderSchedule from 'routes/Authed/CvBuilder/Schedule';
import RouteAuthedCvBuilderСomplete from 'routes/Authed/CvBuilder/Сomplete';
import RouteAuthedProfile from 'routes/Authed/Profile';
import RouteAuthedProfileEdit from 'routes/Authed/Profile/Edit';
import RouteAuthedProfileExperience from 'routes/Authed/Profile/Experience';
import RouteAuthedProfileJobPreferences from 'routes/Authed/Profile/JobPreferences';
import RouteAuthedProfileReviewCv from 'routes/Authed/Profile/ReviewCv';
import RouteAuthedProfileGotHired from 'routes/Authed/Profile/GotHired';
import RouteAuthedProfileUploadCv from 'routes/Authed/Profile/UploadCv';
import config from './config';
import GlobalStyles from './globalStyles.js';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<ContextApp.Provider value={config}>
	<ProviderStore>
		<ProviderTheme>
			<SnackbarProvider>
				<ProviderLanguage>
					<BrowserRouter>
						<Routes>
							<Route 
								path=""
								element={<Layout />}>
								<Route
									path=""
									element={<RouteHome />} />
								<Route
									path={process.env.ROUTE_SiGN_IN}
									element={<RouteAuthSignIn />} />
								<Route
									path={process.env.ROUTE_SiGN_UP}
									element={<RouteAuthSignUp />} />
								<Route
									path={process.env.ROUTE_RECOVERY}
									element={<RouteAuthRecovery />} />
								<Route
									path={process.env.ROUTE_RESET}
									element={<RouteAuthReset />} />
								<Route
									path={process.env.ROUTE_VERIFY}
									element={<RouteAuthVerify />} />
								<Route
									path={`${process.env.ROUTE_GET_STARTED}/*`}
									element={<LayoutGetStarted />}>
									<Route
										index
										element={<RouteGetStarted />} />
									<Route
										path={process.env.ROUTE_LOCATION}
										element={<RouteGetStartedLocation />} />
									<Route
										path={process.env.ROUTE_QUICK_OFFERS}
										element={<RouteGetStartedQuickOffers />} />
								</Route>
								<Route
									path={`${process.env.ROUTE_AUTHED}/*`}
									element={<LayoutAuthed />}>
									<Route
										path=""
										element={<RouteAuthedDashboard />} />
									<Route
										path={`${process.env.ROUTE_CV_BUILDER}/*`}
										element={<LayoutAuthedCvBuilder />}>
										<Route
											index
											element={<RouteAuthedCvBuilder />} />
										<Route
											path={process.env.ROUTE_PHONE}
											element={<RouteAuthedCvBuilderPhone />} />
										<Route
											path={process.env.ROUTE_EXPERIENCE}
											element={<RouteAuthedCvBuilderExperience />} />
										<Route
											path={process.env.ROUTE_EDUCATION}
											element={<RouteAuthedCvBuilderEducation />} />
										<Route
											path={process.env.ROUTE_SKILLS}
											element={<RouteAuthedCvBuilderSkills />} />
										<Route
											path={process.env.ROUTE_DESIRABLE_WORKPLACE}
											element={<RouteAuthedCvBuilderDesirableWorkplace />} />
										<Route
											path={`${process.env.ROUTE_DOCS}/*`}
											element={<LayoutAuthedCvBuilderDocs />}>
											<Route
												path={process.env.ROUTE_LICENCES}
												element={<RouteAuthedCvBuilderLicences />} />
											<Route
												path={process.env.ROUTE_CERTIFICATES}
												element={<RouteAuthedCvBuilderCertificates />} />
										</Route>
										<Route
											path={process.env.ROUTE_LANGUAGE}
											element={<RouteAuthedCvBuilderLanguage />} />
										<Route
											path={process.env.ROUTE_JOB_TYPE}
											element={<RouteAuthedCvBuilderJobType />} />
										<Route
											path={process.env.ROUTE_PAY}
											element={<RouteAuthedCvBuilderPay />} />
										<Route
											path={process.env.ROUTE_RELOCATE}
											element={<RouteAuthedCvBuilderRelocate />} />
										<Route
											path={process.env.ROUTE_REMOTE}
											element={<RouteAuthedCvBuilderRemote />} />
										<Route
											path={process.env.ROUTE_SCHEDULE}
											element={<RouteAuthedCvBuilderSchedule />} />
										<Route
											path={process.env.ROUTE_COMPLETE}
											element={<RouteAuthedCvBuilderСomplete />} />
									</Route>
									<Route
										path=":userId/*"
										element={<LayoutAuthedProfile />}>
										<Route
											index
											element={<RouteAuthedProfile />} />
										<Route
											path={process.env.ROUTE_EDIT}
											element={<RouteAuthedProfileEdit />} />
										<Route
											path={process.env.ROUTE_EXPERIENCE}
											element={<RouteAuthedProfileExperience />} />
										<Route
											path={process.env.ROUTE_JOB_PREFERENCES}
											element={<RouteAuthedProfileJobPreferences />} />
										<Route
											path={process.env.ROUTE_REVIEW_CV}
											element={<RouteAuthedProfileReviewCv />} />
										<Route
											path={process.env.ROUTE_GOT_HIRED}
											element={<RouteAuthedProfileGotHired />} />
										<Route
											path={process.env.ROUTE_UPLOAD}
											element={<RouteAuthedProfileUploadCv />} />
									</Route>
									<Route
										path={`${process.env.ROUTE_JOBS}/*`}
										element={<LayoutAuthedJob />}>
										<Route
											index
											element={<RouteAuthedJob />} />
										<Route
											path={`:jobId`}
											element={<RouteAuthedJobItem />} />
									</Route>
									<Route
										path={`${process.env.ROUTE_SUPPORT}/*`}
										element={<LayoutAuthedSupport />}>
										<Route
											index
											element={<RouteAuthedSupport />} />
										<Route
											path={process.env.ROUTE_LOGIN}
											element={<RouteAuthedSupportLogin />} />
										<Route
											path={process.env.ROUTE_PROFILE}
											element={<RouteAuthedSupportProfile />} />
										<Route
											path={process.env.ROUTE_JOB_SEARCH}
											element={<RouteAuthedSupportJobSearch />} />
										<Route
											path={process.env.ROUTE_JOB_APPLY}
											element={<RouteAuthedSupportJobApply />} />
										<Route
											path={process.env.ROUTE_JOB_ALERT}
											element={<RouteAuthedSupportJobAlert />} />
										<Route
											path={process.env.ROUTE_PRIVACY}
											element={<RouteAuthedSupportPrivacy />} />
									</Route>
								</Route>
								<Route
									path="*"
									element={<RouteSystemNotFound />} />*/}
							</Route>
						</Routes>
					</BrowserRouter>
				</ProviderLanguage>
			</SnackbarProvider>
		</ProviderTheme>
		<GlobalStyles />
	</ProviderStore>
</ContextApp.Provider>);
