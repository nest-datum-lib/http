import React from 'react';
import { ContextRoute } from '@nest-datum-ui/Context';
import PaperUploadCvComplete from 'components/Paper/UploadCv/Complete';

let Сomplete = () => {
	return <ContextRoute.Provider value="authedCvBuilderСomplete">
		<PaperUploadCvComplete />
	</ContextRoute.Provider>;
};

Сomplete = React.memo(Сomplete);
Сomplete.defaultProps = {
};
Сomplete.propTypes = {
};

export default Сomplete;
