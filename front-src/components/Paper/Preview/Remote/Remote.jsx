import React from 'react';
import Typography from 'components/Typography';
import TypographyBody from 'components/Typography/Body';
import StyledWrapper from './Styled/Wrapper.jsx';

let Remote = (props) => {
	return <StyledWrapper { ...props } to={`/${process.env.ROUTE_AUTHED}/${process.env.ROUTE_CV_BUILDER}/${process.env.ROUTE_REMOTE}`}>
		<TypographyBody>
			Remote
		</TypographyBody>
		<Typography>
			Add your desirable workplace settings
		</Typography>
	</StyledWrapper>;
};

Remote = React.memo(Remote);
Remote.defaultProps = {
};
Remote.propTypes = {
};

export default Remote;
