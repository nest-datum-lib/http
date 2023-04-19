import React from 'react';
import { ContextApp } from '@nest-datum-ui/Context';
import Grid from '@mui/material/Grid';
import ButtonLink from '@nest-datum-ui/Button/Link';
import ButtonPaper from 'components/Button/Paper';
import StyledWrapper from './Styled/Wrapper.jsx';

let Support = (props) => {
	const {
		authedSupportLogin,
		authedSupportProfile,
		authedSupportPrivacy,
		authedSupportJobSearch,
		authedSupportJobApply,
		authedSupportJobAlert,
	} = React.useContext(ContextApp);

	return <StyledWrapper container spacing={2} { ...props }>
		<Grid item xs={4}>
			<ButtonPaper 
				fullWidth
				to={authedSupportLogin.form.pageUrl}>
				Login
			</ButtonPaper>
		</Grid>
		<Grid item xs={4}>
			<ButtonPaper 
				fullWidth 
				to={authedSupportProfile.form.pageUrl}>
				Profile/CV
			</ButtonPaper>
		</Grid>
		<Grid item xs={4}>
			<ButtonPaper 
				fullWidth 
				to={authedSupportJobSearch.form.pageUrl}>
				Job Search
			</ButtonPaper>
		</Grid>
		<Grid item xs={4}>
			<ButtonPaper 
				fullWidth 
				to={authedSupportJobApply.form.pageUrl}>
				Apply4Me
			</ButtonPaper>
		</Grid>
		<Grid item xs={4}>
			<ButtonPaper 
				fullWidth 
				component={ButtonLink}
				to={authedSupportJobAlert.form.pageUrl}>
				Job Alerts/
			</ButtonPaper>
		</Grid>
		<Grid item xs={4}>
			<ButtonPaper 
				fullWidth 
				component={ButtonLink}
				to={authedSupportPrivacy.form.pageUrl}>
				Privacy
			</ButtonPaper>
		</Grid>
	</StyledWrapper>;
};

Support = React.memo(Support);
Support.defaultProps = {
};
Support.propTypes = {
};

export default Support;
