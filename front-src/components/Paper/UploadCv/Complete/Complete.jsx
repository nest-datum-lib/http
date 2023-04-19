import React from 'react';
import { 
	ContextApp,
	ContextRoute, 
} from '@nest-datum-ui/Context';
import { ReactComponent as SvgCvBuilder } from 'static/svg/cv-builder.svg';
import Typography from 'components/Typography';
import TypographyTitle from 'components/Typography/Title';
import ButtonPrimary from 'components/Button/Primary';
import StyledWrapper from './Styled/Wrapper.jsx';

let Complete = (props) => {
	const routeName = React.useContext(ContextRoute);
	const { [routeName]: { form: { nextPageUrl } } } = React.useContext(ContextApp);

	return <StyledWrapper { ...props }>
		<SvgCvBuilder />
		<TypographyTitle>
			Сomplete!
		</TypographyTitle>
		<Typography>
			Welcome to HAPP.<br />
			Your profile was successfully created.<br />
			Let's find a great job together.<br />
		</Typography>
		<ButtonPrimary to={nextPageUrl}>
			Review Profile
		</ButtonPrimary>
	</StyledWrapper>;
};

Complete = React.memo(Complete);
Complete.defaultProps = {
};
Complete.propTypes = {
};

export default Complete;
