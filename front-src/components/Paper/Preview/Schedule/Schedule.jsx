import React from 'react';
import Typography from 'components/Typography';
import TypographyBody from 'components/Typography/Body';
import StyledWrapper from './Styled/Wrapper.jsx';

let Schedule = (props) => {
	return <StyledWrapper { ...props } to={`/${process.env.ROUTE_AUTHED}/${process.env.ROUTE_CV_BUILDER}/${process.env.ROUTE_SCHEDULE}`}>
		<TypographyBody>
			Work Schedule
		</TypographyBody>
		<Typography>
			Add your desirable work schedule
		</Typography>
	</StyledWrapper>;
};

Schedule = React.memo(Schedule);
Schedule.defaultProps = {
};
Schedule.propTypes = {
};

export default Schedule;
