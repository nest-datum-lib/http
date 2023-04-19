import React from 'react';
import { ContextRoute } from '@nest-datum-ui/Context';
import PaperSupportAccordion from 'components/Paper/Support/Accordion';

let JobAlert = () => {
	return <ContextRoute.Provider value="authedSupportJobAlert">
		<PaperSupportAccordion />
	</ContextRoute.Provider>;
};

JobAlert = React.memo(JobAlert);
JobAlert.defaultProps = {
};
JobAlert.propTypes = {
};

export default JobAlert;
