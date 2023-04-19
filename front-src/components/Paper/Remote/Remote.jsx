import React from 'react';
import TypographyBody from 'components/Typography/Body';
import FormRemote from 'components/Form/Remote';
import StyledWrapper from './Styled/Wrapper.jsx';

let Remote = (props) => {
	return <StyledWrapper { ...props }>
		<TypographyBody>
			What is your desirable workplace setting?
		</TypographyBody>
		<FormRemote />
	</StyledWrapper>;
};

Remote = React.memo(Remote);
Remote.defaultProps = {
};
Remote.propTypes = {
};

export default Remote;
