import React from 'react';
import { useParams } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ButtonMenuPrimary from 'components/Button/Menu/Primary';
import { ReactComponent as SvgIconsPersonalInfoSmall } from 'static/svg/icons/personalInfo-small-black.svg';
import { ReactComponent as SvgIconsExpirienceSmall } from 'static/svg/icons/expirience-small.svg';
import { ReactComponent as SvgIconsjobPreferencesSmall } from 'static/svg/icons/jobPreferences-small.svg';
import StyledWrapper from './Styled/Wrapper.jsx';

/**
 * https://i.imgur.com/o1zr0sX.png
 */
let Profile = (props) => {
	const { userId } = useParams();

	return <StyledWrapper { ...props }>
		<List disablePadding>
			<ListItem disablePadding>
				<ButtonMenuPrimary to={`/${process.env.ROUTE_AUTHED}/${userId}`}>
					<ListItemIcon>
						<SvgIconsPersonalInfoSmall />
					</ListItemIcon>
					<ListItemText>
						Personal info
					</ListItemText>
				</ButtonMenuPrimary>
			</ListItem>
			<ListItem disablePadding>
				<ButtonMenuPrimary to={`/${process.env.ROUTE_AUTHED}/${userId}/${process.env.ROUTE_EXPERIENCE}`}>
					<ListItemIcon>
						<SvgIconsExpirienceSmall />
					</ListItemIcon>
					<ListItemText>
						Expirience
					</ListItemText>
				</ButtonMenuPrimary>
			</ListItem>
			<ListItem disablePadding>
				<ButtonMenuPrimary to={`/${process.env.ROUTE_AUTHED}/${userId}/${process.env.ROUTE_JOB_PREFERENCES}`}>
					<ListItemIcon>
						<SvgIconsjobPreferencesSmall />
					</ListItemIcon>
					<ListItemText>
						Job Preferences
					</ListItemText>
				</ButtonMenuPrimary>
			</ListItem>
		</List>
	</StyledWrapper>;
};

Profile = React.memo(Profile);
Profile.defaultProps = {
};
Profile.propTypes = {
};

export default Profile;
