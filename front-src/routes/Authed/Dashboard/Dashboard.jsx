import React from 'react';
import { ContextRoute } from '@nest-datum-ui/Context';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PaperGotHiredMin from 'components/Paper/GotHired/Min';
import PaperProfileAside from 'components/Paper/Profile/Aside';
import PaperTitle from 'components/Paper/Title';
import PaperNotification from 'components/Paper/Notification';

let Dashboard = () => {
	return <ContextRoute.Provider value="authedDashboard">
		<Box sx={{ width: '100%' }}>
			<PaperGotHiredMin />
			<Grid container spacing={3}>
				<Grid item xs={3}>
					<PaperProfileAside />
				</Grid>
				<Grid item xs={9}>
					<PaperTitle>
						Notifications
					</PaperTitle>
					<PaperNotification />
				</Grid>
			</Grid>
		</Box>
	</ContextRoute.Provider>;
};

Dashboard = React.memo(Dashboard);
Dashboard.defaultProps = {
};
Dashboard.propTypes = {
};

export default Dashboard;
