import React from 'react';
import { ContextRoute } from '@nest-datum-ui/Context';
import PaperEducation from 'components/Paper/Education';

let Education = () => {
	return <ContextRoute.Provider value="authedCvBuilderEducation">
		<PaperEducation />
	</ContextRoute.Provider>;
};

Education = React.memo(Education);
Education.defaultProps = {
};
Education.propTypes = {
};

export default Education;
