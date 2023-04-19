import React from 'react';
import { ContextRoute } from '@nest-datum-ui/Context';
import PaperLanguage from 'components/Paper/Language';

let Language = () => {
	return <ContextRoute.Provider value="authedCvBuilderLanguage">
		<PaperLanguage />
	</ContextRoute.Provider>;
};

Language = React.memo(Language);
Language.defaultProps = {
};
Language.propTypes = {
};

export default Language;
