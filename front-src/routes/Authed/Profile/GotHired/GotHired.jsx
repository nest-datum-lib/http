import React from 'react';
import { ContextRoute } from '@nest-datum-ui/Context';
import PaperGotHired from 'components/Paper/GotHired';

let GotHired = () => {
	return <ContextRoute.Provider value="authedProfileGotHired">
		<PaperGotHired />
	</ContextRoute.Provider>;
};

GotHired = React.memo(GotHired);
GotHired.defaultProps = {
};
GotHired.propTypes = {
};

export default GotHired;
