import React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import StyledWrapper from './Styled/Wrapper.jsx';

/**
 * https://i.imgur.com/HkoZxxz.png
 */
let Status = (props) => {
	return <StyledWrapper { ...props }>
        <LinearProgress variant="determinate" value={50} /> 
    </StyledWrapper>;
};

Status = React.memo(Status);
Status.defaultProps = {
    value: 43,
};
Status.propTypes = {
    value: PropTypes.number.isRequired,
};

export default Status;
