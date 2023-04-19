import React from 'react';
import TypographyTitle from 'components/Typography/Title';
import FormJobKind from 'components/Form/JobKind';
import { ReactComponent as WhatKindOfJobBg } from 'static/svg/stepWhatKindOfJobBg.svg';
import StyledWrapper from './Styled/Wrapper.jsx';

let JobKind = (props) => {
	return <StyledWrapper { ...props }>
		<WhatKindOfJobBg />
		<TypographyTitle>
			What kind of job are you looking for?
		</TypographyTitle>
		<FormJobKind />
	</StyledWrapper>;
};

JobKind = React.memo(JobKind);
JobKind.defaultProps = {
};
JobKind.propTypes = {
};

export default JobKind;
