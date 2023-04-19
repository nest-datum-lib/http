import React from 'react';
import { Outlet } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import PaperJobMenu from 'components/Paper/Job/Menu';
import StyledWrapper from './Styled/Wrapper.jsx';

let Job = () => {
	return <StyledWrapper>
		<Grid container spacing={3}>
			<Grid item md={3}>
				<PaperJobMenu />
			</Grid>
			<Grid item md={9}>
				<Outlet />
			</Grid>
		</Grid>
	</StyledWrapper>;
};

Job = React.memo(Job);
Job.defaultProps = {
};
Job.propTypes = {
};

export default Job;
