import React from 'react';
import SsoLayoutAuthed from '@nest-datum-ui-admin-lib/sso/src/layouts/Authed';
import { Outlet } from 'react-router-dom';

let Authed = () => {
	return <SsoLayoutAuthed>
		<Outlet />
	</SsoLayoutAuthed>;
};

Authed = React.memo(Authed);
Authed.defaultProps = {
};
Authed.propTypes = {
};

export default Authed;
