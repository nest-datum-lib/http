import React from 'react';
import { ContextRoute } from '@nest-datum-ui/Context';
import PaperSkills from 'components/Paper/Skills';

let Skills = () => {
	return <ContextRoute.Provider value="authedCvBuilderSkills">
		<PaperSkills />
	</ContextRoute.Provider>;
};

Skills = React.memo(Skills);
Skills.defaultProps = {
};
Skills.propTypes = {
};

export default Skills;
