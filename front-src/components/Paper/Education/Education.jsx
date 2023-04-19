import React from 'react';
import TypographyBody from 'components/Typography/Body';
import FormEducation from 'components/Form/Education';
import StyledWrapper from './Styled/Wrapper.jsx';

let Education = (props) => {
	return <StyledWrapper { ...props }>
		<TypographyBody>
			Add information about your school
		</TypographyBody>
		<FormEducation />
	</StyledWrapper>;
};

Education = React.memo(Education);
Education.defaultProps = {
};
Education.propTypes = {
};

export default Education;
