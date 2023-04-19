import React from 'react';
import Typography from 'components/Typography';
import TypographyBody from 'components/Typography/Body';
import StyledWrapper from './Styled/Wrapper.jsx';

let Skills = (props) => {
	return <StyledWrapper { ...props } to={`/${process.env.ROUTE_AUTHED}/${process.env.ROUTE_CV_BUILDER}/${process.env.ROUTE_SKILLS}`}>
		<TypographyBody>
			Skills
		</TypographyBody>
		<Typography>
			Add your core skills
		</Typography>
	</StyledWrapper>;
};

Skills = React.memo(Skills);
Skills.defaultProps = {
};
Skills.propTypes = {
};

export default Skills;
