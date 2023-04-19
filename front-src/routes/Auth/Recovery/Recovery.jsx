import React from 'react';
import { ContextRoute } from '@nest-datum-ui/Context';
import PaperRecovery from 'components/Paper/Recovery';

let Recovery = () => {
	return <ContextRoute.Provider value="authRecovery">
		<PaperRecovery />
	</ContextRoute.Provider>;
};

Recovery = React.memo(Recovery);
Recovery.defaultProps = {
};
Recovery.propTypes = {
};

export default Recovery;
