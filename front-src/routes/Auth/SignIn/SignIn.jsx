import React from 'react';
import { ContextRoute } from '@nest-datum-ui/Context';
import PaperSignIn from 'components/Paper/SignIn';

let SignIn = () => {
	return <ContextRoute.Provider value="authSignIn">
		<PaperSignIn />
	</ContextRoute.Provider>;
};

SignIn = React.memo(SignIn);
SignIn.defaultProps = {
};
SignIn.propTypes = {
};

export default SignIn;
