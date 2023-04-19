import React from 'react';
import { ContextRoute } from '@nest-datum-ui/Context';
import PaperSupportAccordion from 'components/Paper/Support/Accordion';

let JobApply = () => {
	return <ContextRoute.Provider value="authedSupportJobApply">
		<PaperSupportAccordion />
	</ContextRoute.Provider>;
};

JobApply = React.memo(JobApply);
JobApply.defaultProps = {
};
JobApply.propTypes = {
};

export default JobApply;
