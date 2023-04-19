import React from 'react';
import FormSkills from 'components/Form/Skills';
import StyledWrapper from './Styled/Wrapper.jsx';

let Skills = (props) => {
	return <StyledWrapper { ...props }>
		<FormSkills />
	</StyledWrapper>;
};

Skills = React.memo(Skills);
Skills.defaultProps = {
};
Skills.propTypes = {
};

export default Skills;
