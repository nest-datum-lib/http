import React from 'react';
import FormAvatar from 'components/Form/Avatar';
import Typography from 'components/Typography';
import TypographyBody from 'components/Typography/Body';
import TypographyInfoPrimary from 'components/Typography/Info/Primary';
import ButtonHeaderSecondary from 'components/Button/Header/Secondary';
import StyledWrapper from './Styled/Wrapper.jsx';

let Aside = (props) => {
	return <StyledWrapper { ...props }>
		<FormAvatar />
		<TypographyBody className="nameOfUserTitle">
			Esperanza Christensen
		</TypographyBody>
		<ButtonHeaderSecondary>
			Profile Status
		</ButtonHeaderSecondary>
		<Typography className="subTitle">
			Position
		</Typography>
		<TypographyInfoPrimary className="infoTitle">
			Wow! You have a new response from the recruiter!
		</TypographyInfoPrimary>
		<Typography className="subTitle">
			Location
		</Typography>
		<TypographyInfoPrimary className="infoTitle">
			New York
		</TypographyInfoPrimary>
		<Typography className="subTitle">
			Personal website
		</Typography>
		<TypographyInfoPrimary className="infoTitle">
			www.web-adress.com
		</TypographyInfoPrimary>
	</StyledWrapper>;
};

Aside = React.memo(Aside);
Aside.defaultProps = {
};
Aside.propTypes = {
};

export default Aside;
