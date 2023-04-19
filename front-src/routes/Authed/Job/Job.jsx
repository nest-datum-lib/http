import React from 'react';
import { ContextRoute } from '@nest-datum-ui/Context';
import PaperJob from 'components/Paper/Job';

let Job = () => {
	return <ContextRoute.Provider value="authedJob">
		<PaperJob />
	</ContextRoute.Provider>;
};

Job = React.memo(Job);
Job.defaultProps = {
};
Job.propTypes = {
};

export default Job;
