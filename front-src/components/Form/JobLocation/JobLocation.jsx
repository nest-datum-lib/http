import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { 
	ContextApp,
	ContextRoute, 
} from '@nest-datum-ui/Context';
import { selectorMainExtract } from '@nest-datum-ui/Store';
import quickOffersConfig from 'routes/GetStarted/QuickOffers/config.js';
import Field from '@nest-datum-ui/Field';
import InputText from '@nest-datum-ui/Input/Text';
import ButtonPrimary from 'components/Button/Primary';
import ProgressSearchJob from 'components/Progress/Search/Job';
import StyledWrapper from './Styled/Wrapper.jsx';
import handlerSubmit from './handler/submit.js';

let JobLocation = ({ onSubmit, ...props }) => {
	const routeName = React.useContext(ContextRoute);
	const { [routeName]: { form: { storeName, id, apiUrl, nextPageUrl } } } = React.useContext(ContextApp);
	const { form: { storeName: quickOffersStoreName, apiUrl: quickOffersApiUrl } } = quickOffersConfig;
	const loader = useSelector(selectorMainExtract([ 'api', 'form', storeName, 'loader' ]));
	
	const onSubmitWrapper = React.useCallback((e) => {
		handlerSubmit(e, {
			storeName, 
			apiUrl, 
			nextPageUrl,
			quickOffersStoreName,
		quickOffersApiUrl,
		});
		onSubmit(e);
	}, [
		storeName,
		apiUrl,
		nextPageUrl,
		quickOffersStoreName,
		quickOffersApiUrl,
		onSubmit,
	]);

	return <StyledWrapper { ...props }
		storeName={storeName} 
		id={id} 
		onSubmit={onSubmitWrapper}
		ProgressComponent={ProgressSearchJob}>
		{(loader === false || loader === undefined) && <>
			<Field
				Component={InputText}
				form={id}
				name="jobLocation"
				placeholder="Location" />
			<ButtonPrimary fullWidth onClick={onSubmitWrapper}>
				Next Step
			</ButtonPrimary>
		</>}
	</StyledWrapper>;
};

JobLocation = React.memo(JobLocation);
JobLocation.defaultProps = {
	onSubmit: () => {},
};
JobLocation.propTypes = {
	onSubmit: PropTypes.func,
};

export default JobLocation;
