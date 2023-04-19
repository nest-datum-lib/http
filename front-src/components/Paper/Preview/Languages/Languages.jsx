import React from 'react';
import Typography from 'components/Typography';
import TypographyBody from 'components/Typography/Body';
import StyledWrapper from './Styled/Wrapper.jsx';

let Languages = (props) => {
	return <StyledWrapper { ...props } to={`/${process.env.ROUTE_AUTHED}/${process.env.ROUTE_CV_BUILDER}/${process.env.ROUTE_LANGUAGE}`}>
		<TypographyBody>
			Languages
		</TypographyBody>
		<Typography>
			Add languages you can speak
		</Typography>
	</StyledWrapper>;
};

Languages = React.memo(Languages);
Languages.defaultProps = {
};
Languages.propTypes = {
};

export default Languages;
