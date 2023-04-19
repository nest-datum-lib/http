import React from 'react';
import { useSelector } from 'react-redux';
import { selectorMainExtract } from '@nest-datum-ui/Store';
import configSignIn from '@nest-datum-ui-admin-lib/sso/src/config/signIn.js';
import Grid from '@mui/material/Grid';
import ProgressProfileStatus from 'components/Progress/Profile/Status';
import ButtonHeaderPrimary from 'components/Button/Header/Primary';
import StyledWrapper from './Styled/Wrapper.jsx';

let Min = (props) => {
	const userId = useSelector(selectorMainExtract([ 'api', 'form', configSignIn.form.storeName, 'id' ]));

	return <StyledWrapper { ...props }>
		<Grid container alignItems="center">
			<Grid item xs={true} className="paper-got-hired_linear-box">
				<div>Profile Complete:</div>
				<ProgressProfileStatus />
				<div>100%</div>
			</Grid>
			<Grid item xs={false}>
				<ButtonHeaderPrimary to={`/${process.env.ROUTE_AUTHED}/${userId}/${process.env.ROUTE_GOT_HIRED}`}>
					Got Hired
				</ButtonHeaderPrimary>
			</Grid>
		</Grid>
	</StyledWrapper>;
};

Min = React.memo(Min);
Min.defaultProps = {
};
Min.propTypes = {
};

export default Min;
