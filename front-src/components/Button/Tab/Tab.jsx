import React from 'react';
import StyledWrapper from './Styled/Wrapper.jsx';

let Tab = ({ active, className, ...props }) => {
    return <StyledWrapper { ...props } className={`${active ? `active ` : ''}${className || ''}`} />;
};

Tab = React.memo(Tab);
Tab.defaultProps = {
};
Tab.propTypes = {
};

export default Tab;
