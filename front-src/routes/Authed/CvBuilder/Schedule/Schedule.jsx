import React from 'react';
import { ContextRoute } from '@nest-datum-ui/Context';
import PaperSchedule from 'components/Paper/Schedule';

let Schedule = () => {
	return <ContextRoute.Provider value="authedCvBuilderSchedule">
		<PaperSchedule />
	</ContextRoute.Provider>;
};

Schedule = React.memo(Schedule);
Schedule.defaultProps = {
};
Schedule.propTypes = {
};

export default Schedule;
