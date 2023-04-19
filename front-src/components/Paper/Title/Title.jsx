import React from 'react';
import TypographySubtitleSecondary from 'components/Typography/Subtitle/Secondary';
import StyledWrapper from './Styled/Wrapper.jsx';

let Title = ({ children, ...props }) => {
	return <StyledWrapper { ...props }>
		<TypographySubtitleSecondary>
			{children}
		</TypographySubtitleSecondary>
	</StyledWrapper>;
};

Title = React.memo(Title);
Title.defaultProps = {
};
Title.propTypes = {
};

export default Title;
