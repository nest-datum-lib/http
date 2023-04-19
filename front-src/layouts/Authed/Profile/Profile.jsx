import React from 'react';
import { 
	Outlet, 
	useLocation,
	useParams,
} from 'react-router-dom';
import { strPlaceholder as utilsFormatStrPlaceholder } from '@nest-datum-utils/format';
import Grid from '@mui/material/Grid';
import PaperProfileMenu from 'components/Paper/Profile/Menu';
import PaperGotHiredMin from 'components/Paper/GotHired/Min';
import StyledWrapper from './Styled/Wrapper.jsx';

const collapsed = [
	`/${process.env.ROUTE_AUTHED}/:userId/${process.env.ROUTE_EDIT}`,
	`/${process.env.ROUTE_AUTHED}/:userId/${process.env.ROUTE_GOT_HIRED}`,
];
let Profile = () => {
	const { pathname } = useLocation();
	const urlParams = useParams();
	const isCollapsed = (collapsed.filter((item) => utilsFormatStrPlaceholder(item, urlParams) === pathname)).length > 0;

	return <StyledWrapper>
		{!isCollapsed
			? <React.Fragment>
				<PaperGotHiredMin />
				<Grid container spacing={3}>
					<Grid item md={3}>
						<PaperProfileMenu />
					</Grid>
					<Grid item md={9}>
						<Outlet />
					</Grid>
				</Grid>
			</React.Fragment>
			: <Outlet />}
	</StyledWrapper>;
};

Profile = React.memo(Profile);
Profile.defaultProps = {
};
Profile.propTypes = {
};

export default Profile;
