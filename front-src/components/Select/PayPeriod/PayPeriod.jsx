import React from 'react';
import StyledWrapper from './Styled/Wrapper.jsx';

const data = [{
	id: '1',
	title: 'Per hour',
}, {
	id: '2',
	title: 'Per day',
}, {
	id: '3',
	title: 'Per week',
}, {
	id: '4',
	title: 'Per month',
}, {
	id: '5',
	title: 'Per year',
}];

let PayPeriod = (props) => {
	return <StyledWrapper { ...props } loader={false}>
		{data}
	</StyledWrapper>;
};

PayPeriod = React.memo(PayPeriod);
PayPeriod.defaultProps = {
	type: 'select',
};
PayPeriod.propTypes = {
};

export default PayPeriod;
