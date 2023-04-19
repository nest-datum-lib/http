import React from 'react';
import TypographyBody from 'components/Typography/Body';
import FormExperience from 'components/Form/Experience';
import StyledWrapper from './Styled/Wrapper.jsx';

let Experience = (props) => {
	return <StyledWrapper { ...props }>
		<TypographyBody>
			Add your latest work experience
		</TypographyBody>
		<FormExperience />
	</StyledWrapper>;
};

Experience = React.memo(Experience);
Experience.defaultProps = {
};
Experience.propTypes = {
};

export default Experience;
