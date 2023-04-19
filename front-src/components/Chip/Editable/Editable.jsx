import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as CloseIcon } from 'static/svg/icons/remove-black.svg';
import StyledWrapper from './Styled/Wrapper.jsx';

/**
 * https://i.imgur.com/fEeU0Ln.png
 */
let Editable = ({ index, ...props }) => {
	return <StyledWrapper { ...props } deleteIcon={<CloseIcon />} />;
};

Editable = React.memo(Editable);
Editable.defaultProps = {
};
Editable.propTypes = {
    onDelete: PropTypes.func,
};

export default Editable;
