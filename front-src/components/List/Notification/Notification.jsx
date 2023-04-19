import React from 'react';
import { 
	ContextApp,
	ContextRoute, 
} from '@nest-datum-ui/Context';
import { actionApiListGet } from '@nest-datum-ui/Store';
import PaperNotificationItem from 'components/Paper/Notification/Item';
import StyledWrapper from './Styled/Wrapper.jsx';

let QuickOffers = (props) => {
	const routeName = React.useContext(ContextRoute);
	const { [routeName]: { form: { storeName } } } = React.useContext(ContextApp);

	React.useEffect(() => {
		actionApiListGet(storeName, {
			data: [{
				id: '1',
				title: 'Wow! You have a new response from the recruiter!',
				subtitle: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
				company: 'Berkshire Hathaway Inc...',
				position: 'Business Analyst',
				rate: '64 000$/year',
				createdAt: (new Date()).toISOString(),
			}],
		})();
	}, [
		storeName,
	]);

	return <StyledWrapper { ...props } mobileWithDots={false}>
		<PaperNotificationItem />
	</StyledWrapper>;
};

QuickOffers = React.memo(QuickOffers);
QuickOffers.defaultProps = {
};
QuickOffers.propTypes = {
};

export default QuickOffers;
