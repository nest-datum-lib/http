import React from 'react';
import Typography from 'components/Typography';
import TypographyBody from 'components/Typography/Body';
import StyledWrapper from './Styled/Wrapper.jsx';

let Education = (props) => {
	return <StyledWrapper { ...props } to={`/${process.env.ROUTE_AUTHED}/${process.env.ROUTE_CV_BUILDER}/${process.env.ROUTE_EDUCATION}`}>
		<TypographyBody>
			Education
		</TypographyBody>
		<Typography>
			Add information about your education
		</Typography>
	</StyledWrapper>;
};

Education = React.memo(Education);
Education.defaultProps = {
};
Education.propTypes = {
};

export default Education;
