import React from 'react';
import { ContextRoute } from '@nest-datum-ui/Context';
import PaperPhone from 'components/Paper/Phone';

let Phone = () => {
	return <ContextRoute.Provider value="authedCvBuilderPhone">
		<PaperPhone />
	</ContextRoute.Provider>;
};

Phone = React.memo(Phone);
Phone.defaultProps = {
};
Phone.propTypes = {
};

export default Phone;
