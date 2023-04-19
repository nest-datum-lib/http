import React from 'react';
import { ContextRoute } from '@nest-datum-ui/Context';
import PaperSupportAccordion from 'components/Paper/Support/Accordion';

let JobSearch = () => {
	return <ContextRoute.Provider value="authedSupportJobSearch">
		<PaperSupportAccordion />
	</ContextRoute.Provider>;
};

JobSearch = React.memo(JobSearch);
JobSearch.defaultProps = {
};
JobSearch.propTypes = {
};

export default JobSearch;
