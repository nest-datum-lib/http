import React from 'react';
import { useSelector } from 'react-redux';
import { 
	ContextApp,
	ContextRoute, 
} from '@nest-datum-ui/Context';
import { selectorMainExtract } from '@nest-datum-ui/Store';
import TypographyTitle from 'components/Typography/Title';
import FormJobLocation from 'components/Form/JobLocation';
import { ReactComponent as WhereFindJobBg } from 'static/svg/stepWhereFindJobBg.svg';
import StyledWrapper from './Styled/Wrapper.jsx';

let JobLocation = (props) => {
	const routeName = React.useContext(ContextRoute);
	const { [routeName]: { form: { storeName } } } = React.useContext(ContextApp);
	const loader = useSelector(selectorMainExtract([ 'api', 'form', storeName, 'loader' ]));

	return <StyledWrapper { ...props }>
		{(loader === false || loader === undefined)
			&& <>
				<WhereFindJobBg />
				<TypographyTitle>
					Where do you want to find a job?
				</TypographyTitle>
			</>}
			<FormJobLocation />
	</StyledWrapper>;
};

JobLocation = React.memo(JobLocation);
JobLocation.defaultProps = {
};
JobLocation.propTypes = {
};

export default JobLocation;
