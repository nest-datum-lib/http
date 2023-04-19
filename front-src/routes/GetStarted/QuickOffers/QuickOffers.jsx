import React from 'react';
import { ContextRoute } from '@nest-datum-ui/Context';
import PaperQuickOffers from 'components/Paper/QuickOffers';

let QuickOffers = () => {
	return <ContextRoute.Provider value="getStartedQuickOffers">
		<PaperQuickOffers />
	</ContextRoute.Provider>;
};

QuickOffers = React.memo(QuickOffers);
QuickOffers.defaultProps = {
};
QuickOffers.propTypes = {
};

export default QuickOffers;
