import React from 'react';
import { useLocation } from 'react-router-dom';
import { ContextApp } from '@nest-datum-ui/Context';
import LayoutBase from '@nest-datum-ui/Layout';
import PaperHeader from 'components/Paper/Header';
import MenuHeader from 'components/Menu/Header';
import StyledWrapper from './Styled/Wrapper.jsx';
import StyledContentWrapper from './Styled/ContentWrapper.jsx';

let Layout = () => {
	const { pathname } = useLocation();
	const routes = React.useContext(ContextApp);
	const cvBuilderRoutes = Object
		.keys(routes)
		.filter((key) => key.indexOf('authedCvBuilder') === 0 
			&& pathname.indexOf(((routes[key] || {})['form'] || {})['pageUrl']) === 0
			&& ((routes[key] || {})['form'] || {})['displaySteppers']);
	const cvBuilderRoutesFlag = cvBuilderRoutes.length > 0;

	routes['cvBuilderRoutesFlag'] = cvBuilderRoutesFlag;

	return <ContextApp.Provider value={{ ...routes }}>
		<StyledWrapper>
			<PaperHeader cvBuilderRoutesFlag={cvBuilderRoutesFlag}>
				<MenuHeader />
			</PaperHeader>
			<StyledContentWrapper>
				<LayoutBase />
			</StyledContentWrapper>
		</StyledWrapper>
	</ContextApp.Provider>;
};

Layout = React.memo(Layout);
Layout.defaultProps = {
};
Layout.propTypes = {
};

export default Layout;
