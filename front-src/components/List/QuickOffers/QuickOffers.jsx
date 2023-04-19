import React from 'react';
import PaperQuickOffersItem from 'components/Paper/QuickOffers/Item';
import StyledWrapper from './Styled/Wrapper.jsx';

let QuickOffers = (props) => {
	return <StyledWrapper { ...props } mobileWithDots>
		<PaperQuickOffersItem />
	</StyledWrapper>;
};

QuickOffers = React.memo(QuickOffers);
QuickOffers.defaultProps = {
};
QuickOffers.propTypes = {
};

export default QuickOffers;
