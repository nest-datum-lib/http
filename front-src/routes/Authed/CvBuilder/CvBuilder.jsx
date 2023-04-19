import React from 'react';
import { ContextRoute } from '@nest-datum-ui/Context';
import PaperUploadCv from 'components/Paper/UploadCv';

let CvBuilder = () => {
	return <ContextRoute.Provider value="authedCvBuilder">
		<PaperUploadCv />
	</ContextRoute.Provider>;
};

CvBuilder = React.memo(CvBuilder);
CvBuilder.defaultProps = {
};
CvBuilder.propTypes = {
};

export default CvBuilder;
