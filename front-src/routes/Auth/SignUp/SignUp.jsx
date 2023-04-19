import React from 'react';
import { ContextRoute } from '@nest-datum-ui/Context';
import PaperSignUp from 'components/Paper/SignUp';

let SignUp = () => {
	return <ContextRoute.Provider value="authSignUp">
		<PaperSignUp />
	</ContextRoute.Provider>;
};

SignUp = React.memo(SignUp);
SignUp.defaultProps = {
};
SignUp.propTypes = {
};

export default SignUp;
