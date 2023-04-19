import React from 'react';
import { ContextRoute } from '@nest-datum-ui/Context';
import PaperDesirableWorkplace from 'components/Paper/DesirableWorkplace';

let DesirableWorkplace = () => {
	return <ContextRoute.Provider value="authedCvBuilderDesirableWorkplace">
		<PaperDesirableWorkplace />
	</ContextRoute.Provider>;
};

DesirableWorkplace = React.memo(DesirableWorkplace);
DesirableWorkplace.defaultProps = {
};
DesirableWorkplace.propTypes = {
};

export default DesirableWorkplace;
