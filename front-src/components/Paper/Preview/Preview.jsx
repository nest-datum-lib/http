import React from 'react';
import Grid from '@mui/material/Grid';
import IconButtonAdd from 'components/IconButton/Add';
import StyledWrapper from './Styled/Wrapper.jsx';

let Preview = ({ to, children, ...props }) => {
	return <StyledWrapper { ...props }>
		<Grid container>
			<Grid item xs={true}>
				{children}
			</Grid>
			<Grid item xs={false}>
				<IconButtonAdd to={to} />
			</Grid>
		</Grid>
	</StyledWrapper>;
};

Preview = React.memo(Preview);
Preview.defaultProps = {
};
Preview.propTypes = {
};

export default Preview;
