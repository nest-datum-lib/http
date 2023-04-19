import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from 'components/Typography';
import TypographyBody from 'components/Typography/Body';
import IconButtonEditPrimary from 'components/IconButton/Edit/Primary';
import IconButtonEditFacebook from 'components/IconButton/Edit/Facebook';
import IconButtonEditLinkedin from 'components/IconButton/Edit/Linkedin';
import Min from './Min';
import StyledWrapper from './Styled/Wrapper.jsx';

let Profile = (props) => {
	return <StyledWrapper { ...props }>
		<Grid container className='paper-profile_min-edit-line'>
			<Grid item xs={true}>
				<Min />
			</Grid>
			<Grid item xs={false}>
				<IconButtonEditPrimary to={`${window.location.pathname}/${process.env.ROUTE_EDIT}`} />
			</Grid>
		</Grid>
		<Grid container className='paper-profile_info-box'>
			<Grid item md={6}>
				<Typography className="paper-profile_info-title">
					Position
				</Typography>
				<TypographyBody className="paper-profile_info-subtitle">
					Aerial-photograph interpreter
				</TypographyBody>
				<Typography className="paper-profile_info-title">
					Location
				</Typography>
				<TypographyBody className="paper-profile_info-subtitle">
					New York
				</TypographyBody>
				<Typography className="paper-profile_info-title">
					Phone
				</Typography>
				<TypographyBody className="paper-profile_info-subtitle">
					+380985061371
				</TypographyBody>
			</Grid>
			<Grid item md={6}>
				<Typography className="paper-profile_info-title">
					Email (verified)
				</Typography>
				<TypographyBody className="paper-profile_info-subtitle">
					leonekain@gmail.com
				</TypographyBody>
				<Typography className="paper-profile_info-title">
					Personal website
				</Typography>
				<TypographyBody className="paper-profile_info-subtitle">
					www.web-adress.com
				</TypographyBody>
				<Typography className="paper-profile_info-title">
					Social Media
				</Typography>
				<Grid container alignItems="center" spacing={2}>
					<Grid item xs={false}>
						<IconButtonEditFacebook />
					</Grid>
					<Grid item xs={false}>
						<IconButtonEditLinkedin />
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	</StyledWrapper>;
};

Profile = React.memo(Profile);
Profile.defaultProps = {
};
Profile.propTypes = {
};

export default Profile;
