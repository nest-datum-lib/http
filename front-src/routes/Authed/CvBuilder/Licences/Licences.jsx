import React from 'react';
import { ContextRoute } from '@nest-datum-ui/Context';
import FormLicences from 'components/Form/Licences';

let Licences = () => {
	return <ContextRoute.Provider value="authedCvBuilderLicences">
		<FormLicences />
	</ContextRoute.Provider>;
};

Licences = React.memo(Licences);
Licences.defaultProps = {
};
Licences.propTypes = {
};

export default Licences;
