import React from 'react';
import TypographyBody from 'components/Typography/Body';
import FormRelocate from 'components/Form/Relocate';
import StyledWrapper from './Styled/Wrapper.jsx';

let Relocate = (props) => {
	return <StyledWrapper { ...props }>
		<TypographyBody>
			Are you willing to relocate?
		</TypographyBody>
		<FormRelocate />
	</StyledWrapper>;
};

Relocate = React.memo(Relocate);
Relocate.defaultProps = {
};
Relocate.propTypes = {
};

export default Relocate;
