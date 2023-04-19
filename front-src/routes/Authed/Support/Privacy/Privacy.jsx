import React from 'react';
import { ContextRoute } from '@nest-datum-ui/Context';
import PaperSupportAccordion from 'components/Paper/Support/Accordion';

let Privacy = () => {
	return <ContextRoute.Provider value="authedSupportPrivacy">
		<PaperSupportAccordion />
	</ContextRoute.Provider>;
};

Privacy = React.memo(Privacy);
Privacy.defaultProps = {
};
Privacy.propTypes = {
};

export default Privacy;
