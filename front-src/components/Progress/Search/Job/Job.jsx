import React from 'react';
import Box from '@mui/material/Box';
import TypographyTitlePrimary from 'components/Typography/Title/Primary';
import { ReactComponent as SvgLogo } from 'static/svg/logo.svg';
import { ReactComponent as TimerPreloader } from 'static/svg/icons/timerPreloader-medium.svg';
import StyledWrapper from './Styled/Wrapper.jsx';

let Create = (props) => {
	return <StyledWrapper { ...props }>
		<Box className="progress-profile__content-wrapper">
			<SvgLogo className="svg_logo-preloader" />
			<TimerPreloader />
			<TypographyTitlePrimary>
				Searching for<br />the perfect job for you...
			</TypographyTitlePrimary>
		</Box>
	</StyledWrapper>;
};

Create = React.memo(Create);
Create.defaultProps = {
};
Create.propTypes = {
};

export default Create;
