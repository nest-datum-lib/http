import React from 'react';
import { ContextRoute } from '@nest-datum-ui/Context';
import PaperProfileEdit from 'components/Paper/Profile/Edit';

let Edit = () => {
	return <ContextRoute.Provider value="authedProfileEdit">
		<PaperProfileEdit />
	</ContextRoute.Provider>;
};

Edit = React.memo(Edit);
Edit.defaultProps = {
};
Edit.propTypes = {
};

export default Edit;
