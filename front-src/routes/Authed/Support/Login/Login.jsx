import React from 'react';
import { ContextRoute } from '@nest-datum-ui/Context';
import PaperSupportAccordion from 'components/Paper/Support/Accordion';

let Login = () => {
	return <ContextRoute.Provider value="authedSupportLogin">
		<PaperSupportAccordion />
	</ContextRoute.Provider>;
};

Login = React.memo(Login);
Login.defaultProps = {
};
Login.propTypes = {
};

export default Login;
