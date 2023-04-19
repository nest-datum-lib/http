import React from 'react';
import TypographyBody from 'components/Typography/Body';
import TypographyCaptionPrimary from 'components/Typography/Caption/Primary';
import FormGotHired from 'components/Form/GotHired';
import StyledWrapper from './Styled/Wrapper.jsx';

let GotHired = (props) => {
	return <StyledWrapper { ...props }>
		<TypographyBody className="titleOfGetHired">
			Got Hired
		</TypographyBody>
		<TypographyCaptionPrimary className="subtitleOfGetHired">
			Let us know if you have found<br />
			a job to update your status
		</TypographyCaptionPrimary>
		<FormGotHired />
	</StyledWrapper>;
};

GotHired = React.memo(GotHired);
GotHired.defaultProps = {
};
GotHired.propTypes = {
};

export default GotHired;
