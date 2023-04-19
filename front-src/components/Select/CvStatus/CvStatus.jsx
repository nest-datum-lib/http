import React from 'react';
import StyledWrapper from './Styled/Wrapper.jsx';

let CvStatus = (props) => {
	return <StyledWrapper { ...props } />;
};

CvStatus = React.memo(CvStatus);
CvStatus.defaultProps = {
	itemKey: 'name',
	name: 'reportStatusId',
	label: 'My CV Status',
};
CvStatus.propTypes = {
};

export default CvStatus;
