import React from 'react';
import TypographyBody from 'components/Typography/Body';
import FormSupport from 'components/Form/Support';
import StyledWrapper from './Styled/Wrapper.jsx';

let Support = (props) => {
	return <StyledWrapper { ...props }>
		<TypographyBody>
			Need some help? Ask me a question!
		</TypographyBody>
		<FormSupport />
	</StyledWrapper>;
};

Support = React.memo(Support);
Support.defaultProps = {
};
Support.propTypes = {
};

export default Support;
