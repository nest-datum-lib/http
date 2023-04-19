import React from 'react';
import Typography from 'components/Typography';
import TypographyBody from 'components/Typography/Body';
import StyledWrapper from './Styled/Wrapper.jsx';

let Experience = (props) => {
	return <StyledWrapper { ...props } to={`/${process.env.ROUTE_AUTHED}/${process.env.ROUTE_CV_BUILDER}/${process.env.ROUTE_EXPERIENCE}`}>
		<TypographyBody>
			Experience
		</TypographyBody>
		<Typography>
			Add information about your work experience
		</Typography>
	</StyledWrapper>;
};

Experience = React.memo(Experience);
Experience.defaultProps = {
};
Experience.propTypes = {
};

export default Experience;
