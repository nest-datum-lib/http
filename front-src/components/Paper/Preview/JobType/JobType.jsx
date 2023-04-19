import React from 'react';
import Typography from 'components/Typography';
import TypographyBody from 'components/Typography/Body';
import StyledWrapper from './Styled/Wrapper.jsx';

let JobType = (props) => {
	return <StyledWrapper { ...props } to={`/${process.env.ROUTE_AUTHED}/${process.env.ROUTE_CV_BUILDER}/${process.env.ROUTE_JOB_TYPE}`}>
		<TypographyBody>
			Job type
		</TypographyBody>
		<Typography>
			Add your desirable job type
		</Typography>
	</StyledWrapper>;
};

JobType = React.memo(JobType);
JobType.defaultProps = {
};
JobType.propTypes = {
};

export default JobType;
