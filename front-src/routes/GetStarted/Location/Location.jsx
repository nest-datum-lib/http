import React from 'react';
import { ContextRoute } from '@nest-datum-ui/Context';
import PaperJobLocation from 'components/Paper/JobLocation';

let Location = () => {
	return <ContextRoute.Provider value="getStartedLocation">
		<PaperJobLocation />
	</ContextRoute.Provider>;
};

Location = React.memo(Location);
Location.defaultProps = {
};
Location.propTypes = {
};

export default Location;
