import React from 'react';
import StyledWrapper from './Styled/Wrapper.jsx';

let Tag = (props) => {
	return <StyledWrapper { ...props } />;
};

Tag = React.memo(Tag);
Tag.defaultProps = {
    variant: 'outlined',
};
Tag.propTypes = {
};

export default Tag;
