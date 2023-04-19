import React from 'react';
import { ContextRoute } from '@nest-datum-ui/Context';
import PaperPay from 'components/Paper/Pay';

let Pay = () => {
	return <ContextRoute.Provider value="authedCvBuilderPay">
		<PaperPay />
	</ContextRoute.Provider>;
};

Pay = React.memo(Pay);
Pay.defaultProps = {
};
Pay.propTypes = {
};

export default Pay;
