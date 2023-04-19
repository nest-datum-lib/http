import React from 'react';
import Typography from 'components/Typography';
import TypographyBody from 'components/Typography/Body';
import StyledWrapper from './Styled/Wrapper.jsx';

let Relocate = (props) => {
	return <StyledWrapper { ...props } to={`/${process.env.ROUTE_AUTHED}/${process.env.ROUTE_CV_BUILDER}/${process.env.ROUTE_RELOCATE}`}>
		<TypographyBody>
			Relocate
		</TypographyBody>
		<Typography>
			Add relocation option
		</Typography>
	</StyledWrapper>;
};

Relocate = React.memo(Relocate);
Relocate.defaultProps = {
};
Relocate.propTypes = {
};

export default Relocate;
