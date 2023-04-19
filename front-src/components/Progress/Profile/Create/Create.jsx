import React from 'react';
import Box from '@mui/material/Box';
import TypographyTitlePrimary from 'components/Typography/Title/Primary';
import TypographyTitleSecondary from 'components/Typography/Title/Secondary';
import { ReactComponent as SvgLogo } from 'static/svg/logo.svg';
import { ReactComponent as TimerPreloader } from 'static/svg/icons/timerPreloader-medium.svg';
import StyledWrapper from './Styled/Wrapper.jsx';

/**
 * https://i.imgur.com/v3VH6te.png
 */
let Create = (props) => {
	return <StyledWrapper { ...props }>
		<Box className="progress-profile__content-wrapper">
			<SvgLogo className="svg_logo-preloader" />
			<TypographyTitleSecondary>
				Preloader
			</TypographyTitleSecondary>
			<TimerPreloader />
			<TypographyTitlePrimary>
				Creating your<br />HAPP profile...
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
