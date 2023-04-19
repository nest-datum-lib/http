import React from 'react';
import TypographyBody from 'components/Typography/Body';
import FormSchedule from 'components/Form/Schedule';
import StyledWrapper from './Styled/Wrapper.jsx';

let Schedule = (props) => {
	return <StyledWrapper { ...props }>
		<TypographyBody>
			What is your desirable schedule?
		</TypographyBody>
		<FormSchedule />
	</StyledWrapper>;
};

Schedule = React.memo(Schedule);
Schedule.defaultProps = {
};
Schedule.propTypes = {
};

export default Schedule;
