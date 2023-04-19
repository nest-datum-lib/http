import React from 'react';
import { Outlet } from 'react-router-dom';
import { ContextRoute } from '@nest-datum-ui/Context';
import Grid from '@mui/material/Grid';
import PaperSupport from 'components/Paper/Support';

let Support = () => {
	return <Grid container spacing={3}>
		<Grid item md={8}>
			<Outlet />
		</Grid>
		<Grid item md={4}>
			<ContextRoute.Provider value="authedSupport">
				<PaperSupport />
			</ContextRoute.Provider>
		</Grid>
	</Grid>;
};

Support = React.memo(Support);
Support.defaultProps = {
};
Support.propTypes = {
};

export default Support;
