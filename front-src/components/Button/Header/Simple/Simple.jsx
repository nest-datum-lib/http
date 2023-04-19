import React from 'react';
import PropTypes from 'prop-types';
import StyledWrapper from './Styled/Wrapper.jsx';

/**
 * https://i.imgur.com/EwI1eem.png
 */
let Simple = ({ active, className, ...props }) => {
	return <StyledWrapper { ...props } className={active ? `active ${className}` : className} />;
};

Simple = React.memo(Simple);
Simple.defaultProps = {
};
Simple.propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
};

export default Simple;
