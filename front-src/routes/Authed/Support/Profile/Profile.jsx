import React from 'react';
import { ContextRoute } from '@nest-datum-ui/Context';
import PaperSupportAccordion from 'components/Paper/Support/Accordion';

let Profile = () => {
	return <ContextRoute.Provider value="authedSupportProfile">
		<PaperSupportAccordion />
	</ContextRoute.Provider>;
};

Profile = React.memo(Profile);
Profile.defaultProps = {
};
Profile.propTypes = {
};

export default Profile;
