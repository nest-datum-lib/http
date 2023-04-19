import React from 'react';
import { Outlet } from 'react-router-dom';
import StyledWrapper from './Styled/Wrapper.jsx';

let Authed = () => {
	return <StyledWrapper>
		<Outlet />
	</StyledWrapper>;
};

Authed = React.memo(Authed);
Authed.defaultProps = {
};
Authed.propTypes = {
};

export default Authed;
