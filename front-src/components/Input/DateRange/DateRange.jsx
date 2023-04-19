import React from 'react';
import StyledWrapper from './Styled/Wrapper.jsx';

let DateRange = (props) => {
	return <StyledWrapper { ...props } />;
};

DateRange = React.memo(DateRange);
DateRange.defaultProps = {
};
DateRange.propTypes = {
};

export default DateRange;
