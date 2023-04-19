import React from 'react';
import TypographyBody from 'components/Typography/Body';
import FormDesirableWorkplace from 'components/Form/DesirableWorkplace';
import StyledWrapper from './Styled/Wrapper.jsx';

let DesirableWorkplace = (props) => {
	return <StyledWrapper { ...props }>
		<TypographyBody>
			Desirable workplace
		</TypographyBody>
		<FormDesirableWorkplace />
	</StyledWrapper>;
};

DesirableWorkplace = React.memo(DesirableWorkplace);
DesirableWorkplace.defaultProps = {
};
DesirableWorkplace.propTypes = {
};

export default DesirableWorkplace;
