import React from 'react';
import { ContextRoute } from '@nest-datum-ui/Context';
import PaperProfile from 'components/Paper/Profile';

let Profile = () => {
	return <ContextRoute.Provider value="authedProfile">
		<PaperProfile />
	</ContextRoute.Provider>;
};

Profile = React.memo(Profile);
Profile.defaultProps = {
};
Profile.propTypes = {
};

export default Profile;
