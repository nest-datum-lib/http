import React from 'react';
import { ContextRoute } from '@nest-datum-ui/Context';
import PaperJobKind from 'components/Paper/JobKind';

let CvBuilder = () => {
	return <ContextRoute.Provider value="getStarted">
		<PaperJobKind />
	</ContextRoute.Provider>;
};

CvBuilder = React.memo(CvBuilder);
CvBuilder.defaultProps = {
};
CvBuilder.propTypes = {
};

export default CvBuilder;
