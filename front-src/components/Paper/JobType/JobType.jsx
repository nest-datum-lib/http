import React from 'react';
import TypographyBody from 'components/Typography/Body';
import FormJobType from 'components/Form/JobType';
import StyledWrapper from './Styled/Wrapper.jsx';

let JobType = (props) => {
	return <StyledWrapper { ...props }>
		<TypographyBody>
			What is your desirable job type?
		</TypographyBody>
		<FormJobType />
	</StyledWrapper>;
};

JobType = React.memo(JobType);
JobType.defaultProps = {
};
JobType.propTypes = {
};

export default JobType;
