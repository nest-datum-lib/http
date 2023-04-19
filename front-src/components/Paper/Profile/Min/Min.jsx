import React from 'react';
import Grid from '@mui/material/Grid';
import Avatar from 'components/Avatar';
import TypographyStatus from 'components/Typography/Status';
import TypographyStatusPrimary from 'components/Typography/Status/Primary';
import StyledWrapper from './Styled/Wrapper.jsx';

let Min = (props) => {
	return <StyledWrapper container justifyContent="space-between" { ...props }>
		<Grid item xs={false}>
			<Avatar withUpload>
				UN
			</Avatar>
		</Grid>
		<Grid item xs={true}>
			<TypographyStatusPrimary>
				Esperanza Christensen
			</TypographyStatusPrimary>
			<TypographyStatus>
				<span>Active Search</span>
				<span className='paper-profile-min_search-status active'></span>
			</TypographyStatus>
		</Grid>
	</StyledWrapper>;
};

Min = React.memo(Min);
Min.defaultProps = {
};
Min.propTypes = {
};

export default Min;
