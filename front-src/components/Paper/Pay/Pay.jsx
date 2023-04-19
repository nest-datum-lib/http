import React from 'react';
import TypographyBody from 'components/Typography/Body';
import FormPay from 'components/Form/Pay';
import StyledWrapper from './Styled/Wrapper.jsx';

let Pay = (props) => {
	return <StyledWrapper { ...props }>
		<TypographyBody>
			What is your desirable pay?
		</TypographyBody>
		<FormPay />
	</StyledWrapper>;
};

Pay = React.memo(Pay);
Pay.defaultProps = {
};
Pay.propTypes = {
};

export default Pay;
