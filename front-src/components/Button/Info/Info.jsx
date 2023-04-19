import React from 'react';
import PropTypes from 'prop-types';
import StyledWrapper from './Styled/Wrapper.jsx';

/**
 * https://i.imgur.com/79WuAjw.png
 */
let Info = ({ underline, ...props }) => {
	return <StyledWrapper { ...props } underline={Number(underline)} />;
};

Info = React.memo(Info);
Info.defaultProps = {
    underline: false,
};
Info.propTypes = {
    underline: PropTypes.bool,
};

export default Info;
