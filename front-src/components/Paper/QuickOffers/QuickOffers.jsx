import React from 'react';
import TypographyTitle from 'components/Typography/Title';
import ListQuickOffers from 'components/List/QuickOffers';
import FormQuickOffers from 'components/Form/QuickOffers';
import StyledWrapper from './Styled/Wrapper.jsx';

let QuickOffers = (props) => {
	return <StyledWrapper { ...props }>
		<TypographyTitle className="titleSomeJobs">
			We have some jobs for you!
		</TypographyTitle>
		<ListQuickOffers />
		<FormQuickOffers className="quickOffersLastBox" />
	</StyledWrapper>;
};

QuickOffers = React.memo(QuickOffers);
QuickOffers.defaultProps = {
};
QuickOffers.propTypes = {
};

export default QuickOffers;
