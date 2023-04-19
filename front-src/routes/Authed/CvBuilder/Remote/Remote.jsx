import React from 'react';
import { ContextRoute } from '@nest-datum-ui/Context';
import PaperRemote from 'components/Paper/Remote';

let Remote = () => {
	return <ContextRoute.Provider value="authedCvBuilderRemote">
		<PaperRemote />
	</ContextRoute.Provider>;
};

Remote = React.memo(Remote);
Remote.defaultProps = {
};
Remote.propTypes = {
};

export default Remote;
