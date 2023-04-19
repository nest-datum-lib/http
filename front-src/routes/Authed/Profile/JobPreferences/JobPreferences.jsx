import React from 'react';
import { ContextRoute } from '@nest-datum-ui/Context';
import PaperPreviewPay from 'components/Paper/Preview/Pay';
import PaperPreviewSchedule from 'components/Paper/Preview/Schedule';
import PaperPreviewRemote from 'components/Paper/Preview/Remote';
import PaperPreviewJobType from 'components/Paper/Preview/JobType';
import PaperPreviewRelocate from 'components/Paper/Preview/Relocate';

let JobPreferences = () => {
	return <ContextRoute.Provider value="authedProfileJobPreferences">
		<PaperPreviewPay />
		<PaperPreviewSchedule />
		<PaperPreviewRemote />
		<PaperPreviewJobType />
		<PaperPreviewRelocate />
	</ContextRoute.Provider>;
};

JobPreferences = React.memo(JobPreferences);
JobPreferences.defaultProps = {
};
JobPreferences.propTypes = {
};

export default JobPreferences;
