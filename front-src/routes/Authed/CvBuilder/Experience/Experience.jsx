import React from 'react';
import { ContextRoute } from '@nest-datum-ui/Context';
import PaperExperience from 'components/Paper/Experience';

let Experience = () => {
	return <ContextRoute.Provider value="authedCvBuilderExperience">
		<PaperExperience />
	</ContextRoute.Provider>;
};

Experience = React.memo(Experience);
Experience.defaultProps = {
};
Experience.propTypes = {
};

export default Experience;
