import React from 'react';
import TypographyBody from 'components/Typography/Body';
import FormLanguage from 'components/Form/Language';
import StyledWrapper from './Styled/Wrapper.jsx';

let Language = (props) => {
	return <StyledWrapper { ...props }>
		<TypographyBody>
			Add language you can speak
		</TypographyBody>
		<FormLanguage />
	</StyledWrapper>;
};

Language = React.memo(Language);
Language.defaultProps = {
};
Language.propTypes = {
};

export default Language;
