import React from 'react';
import TypographyBody from 'components/Typography/Body';
import TypographySubtitle from 'components/Typography/Subtitle';
import FormPhone from 'components/Form/Phone';
import StyledWrapper from './Styled/Wrapper.jsx';

let Phone = (props) => {
	return <StyledWrapper { ...props }>
		<TypographyBody>
			Add your phone number
		</TypographyBody>
		<FormPhone />
		<TypographySubtitle>
			It helps companies to reach you<br />
			and set up interview faster
		</TypographySubtitle>
	</StyledWrapper>;
};

Phone = React.memo(Phone);
Phone.defaultProps = {
};
Phone.propTypes = {
};

export default Phone;
