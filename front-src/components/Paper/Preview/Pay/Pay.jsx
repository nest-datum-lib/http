import React from 'react';
import Typography from 'components/Typography';
import TypographyBody from 'components/Typography/Body';
import StyledWrapper from './Styled/Wrapper.jsx';

let Pay = (props) => {
	return <StyledWrapper { ...props } to={`/${process.env.ROUTE_AUTHED}/${process.env.ROUTE_CV_BUILDER}/${process.env.ROUTE_PAY}`}>
		<TypographyBody>
			Desirable pay
		</TypographyBody>
		<Typography>
			Add your desirable pay
		</Typography>
	</StyledWrapper>;
};

Pay = React.memo(Pay);
Pay.defaultProps = {
};
Pay.propTypes = {
};

export default Pay;
