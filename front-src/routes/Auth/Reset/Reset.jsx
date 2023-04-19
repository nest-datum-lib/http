import React from 'react';
import { ContextRoute } from '@nest-datum-ui/Context';
import PaperReset from 'components/Paper/Reset';

let Reset = () => {
	return <ContextRoute.Provider value="authReset">
		<PaperReset />
	</ContextRoute.Provider>;
};

Reset = React.memo(Reset);
Reset.defaultProps = {
};
Reset.propTypes = {
};

export default Reset;
