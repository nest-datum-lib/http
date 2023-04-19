import React from 'react';
import { ContextRoute } from '@nest-datum-ui/Context';
import PaperJobType from 'components/Paper/JobType';

let JobType = () => {
	return <ContextRoute.Provider value="authedCvBuilderJobType">
		<PaperJobType />
	</ContextRoute.Provider>;
};

JobType = React.memo(JobType);
JobType.defaultProps = {
};
JobType.propTypes = {
};

export default JobType;
