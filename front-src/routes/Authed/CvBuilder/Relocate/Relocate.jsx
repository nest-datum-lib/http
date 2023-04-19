import React from 'react';
import { ContextRoute } from '@nest-datum-ui/Context';
import PaperRelocate from 'components/Paper/Relocate';

let Relocate = () => {
	return <ContextRoute.Provider value="authedCvBuilderRelocate">
		<PaperRelocate />
	</ContextRoute.Provider>;
};

Relocate = React.memo(Relocate);
Relocate.defaultProps = {
};
Relocate.propTypes = {
};

export default Relocate;
