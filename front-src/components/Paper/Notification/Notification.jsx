import React from 'react';
import ListNotification from 'components/List/Notification';
import StyledWrapper from './Styled/Wrapper.jsx';

let QuickOffers = (props) => {
    return <StyledWrapper { ...props }>
        <ListNotification />
    </StyledWrapper>;
};

QuickOffers = React.memo(QuickOffers);
QuickOffers.defaultProps = {
};
QuickOffers.propTypes = {
};

export default QuickOffers;
