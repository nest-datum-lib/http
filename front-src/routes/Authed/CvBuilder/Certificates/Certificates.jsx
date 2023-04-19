import React from 'react';
import { ContextRoute } from '@nest-datum-ui/Context';
import FormCertificates from 'components/Form/Certificates';

let Certificates = () => {
	return <ContextRoute.Provider value="authedCvBuilderCertificates">
		<FormCertificates />
	</ContextRoute.Provider>;
};

Certificates = React.memo(Certificates);
Certificates.defaultProps = {
};
Certificates.propTypes = {
};

export default Certificates;
