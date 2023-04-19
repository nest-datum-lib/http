import React from 'react';
import TypographyTitle from 'components/Typography/Title';
import Typography from 'components/Typography';
import FormRecovery from 'components/Form/Recovery';
import StyledWrapper from './Styled/Wrapper.jsx';

let Recovery = (props) => {
	return <StyledWrapper { ...props }>
		<TypographyTitle>
			Reset password
		</TypographyTitle>
		<Typography className="infoTitle">
			Enter your email and we'll<br />
			send you link to reset your password
		</Typography>
		<FormRecovery />
	</StyledWrapper>;
};

Recovery = React.memo(Recovery);
Recovery.defaultProps = {
};
Recovery.propTypes = {
};

export default Recovery;
