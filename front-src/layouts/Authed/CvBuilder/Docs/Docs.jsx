import React from 'react';
import { 
	useLocation,
	Outlet, 
} from 'react-router-dom';
import Grid from '@mui/material/Grid';
import TypographyBody from 'components/Typography/Body';
import ButtonTab from 'components/Button/Tab';
import StyledWrapper from './Styled/Wrapper.jsx';

let Docs = (props) => {
	const { pathname } = useLocation();
	const isCertificates = pathname.indexOf(`/${process.env.ROUTE_AUTHED}/${process.env.ROUTE_CV_BUILDER}/${process.env.ROUTE_DOCS}/${process.env.ROUTE_CERTIFICATES}`) === 0;

	return <StyledWrapper { ...props }>
		<TypographyBody className="paper-docs_title">
			Tell us about your expertises
		</TypographyBody>
		<Grid container className="paper-docs_tabs">
			<Grid item xs={false}>
				<ButtonTab 
					{ ...isCertificates 
						? { to: `/${process.env.ROUTE_AUTHED}/${process.env.ROUTE_CV_BUILDER}/${process.env.ROUTE_DOCS}/${process.env.ROUTE_LICENCES}` }
						: { active: true } }>
					License
				</ButtonTab>
			</Grid>
			<Grid item xs={false}>
				<ButtonTab 
					{ ...isCertificates 
						? { active: true } 
						: { to: `/${process.env.ROUTE_AUTHED}/${process.env.ROUTE_CV_BUILDER}/${process.env.ROUTE_DOCS}/${process.env.ROUTE_CERTIFICATES}` } }>
					Certificates
				</ButtonTab>
			</Grid>
		</Grid>
		<Outlet />
	</StyledWrapper>;
};

Docs = React.memo(Docs);
Docs.defaultProps = {
};
Docs.propTypes = {
};

export default Docs;
