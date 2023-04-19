import React from 'react';
import { ContextRoute } from '@nest-datum-ui/Context';
import PaperPreviewExperience from 'components/Paper/Preview/Experience';
import PaperPreviewEducation from 'components/Paper/Preview/Education';
import PaperPreviewCertificates from 'components/Paper/Preview/Certificates';
import PaperPreviewSkills from 'components/Paper/Preview/Skills';
import PaperPreviewLanguages from 'components/Paper/Preview/Languages';

let Experience = () => {
	return <ContextRoute.Provider value="authedProfileExperience">
		<PaperPreviewExperience />
		<PaperPreviewEducation />
		<PaperPreviewCertificates />
		<PaperPreviewSkills />
		<PaperPreviewLanguages />
	</ContextRoute.Provider>;
};

Experience = React.memo(Experience);
Experience.defaultProps = {
};
Experience.propTypes = {
};

export default Experience;
