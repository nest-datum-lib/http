import React from 'react';
import { ContextRoute } from '@nest-datum-ui/Context';
import MenuSupport from 'components/Menu/Support';

let Support = () => {
	return <ContextRoute.Provider value="authedSupport">
		<MenuSupport />
	</ContextRoute.Provider>;
};

Support = React.memo(Support);
Support.defaultProps = {
};
Support.propTypes = {
};

export default Support;
