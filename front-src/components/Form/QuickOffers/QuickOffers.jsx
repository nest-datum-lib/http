import React from 'react';
import { 
	ContextApp,
	ContextRoute, 
} from '@nest-datum-ui/Context';
import TypographyTitle from 'components/Typography/Title';
import ButtonPrimary from 'components/Button/Primary';
import StyledWrapper from './Styled/Wrapper.jsx';

let JobLocation = (props) => {
	const routeName = React.useContext(ContextRoute);
	const { [routeName]: { form: { nextPageUrl } } } = React.useContext(ContextApp);
	
	return <StyledWrapper { ...props }>
		<TypographyTitle>
			Let's finish the registration process,<br/>so we can find more job opportunities for you
		</TypographyTitle>
		<ButtonPrimary to={nextPageUrl}>
			Get a job
		</ButtonPrimary>
	</StyledWrapper>;
};

JobLocation = React.memo(JobLocation);
JobLocation.defaultProps = {
};
JobLocation.propTypes = {
};

export default JobLocation;
