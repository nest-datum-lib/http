import React from 'react';
import Typography from 'components/Typography';
import TypographyBody from 'components/Typography/Body';
import StyledWrapper from './Styled/Wrapper.jsx';

let Certificates = (props) => {
	return <StyledWrapper { ...props } to={`/${process.env.ROUTE_AUTHED}/${process.env.ROUTE_CV_BUILDER}/${process.env.ROUTE_DOCS}/${process.env.ROUTE_LICENCES}`}>
		<TypographyBody>
			Licences&Certificates
		</TypographyBody>
		<Typography>
			Add information about your expertises
		</Typography>
	</StyledWrapper>;
};

Certificates = React.memo(Certificates);
Certificates.defaultProps = {
};
Certificates.propTypes = {
};

export default Certificates;
