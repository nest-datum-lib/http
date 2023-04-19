import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ButtonMenuPrimary from 'components/Button/Menu/Primary';
import { ReactComponent as SvgIconsApplyedJobSmallLight } from 'static/svg/icons/applyedJob-small-light.svg';
import StyledWrapper from './Styled/Wrapper.jsx';

let Job = (props) => {
	return <StyledWrapper { ...props }>
		<List disablePadding>
			<ListItem disablePadding>
				<ButtonMenuPrimary>
					<ListItemIcon>
						<SvgIconsApplyedJobSmallLight />
					</ListItemIcon>
					<ListItemText>
						Applyed Job
					</ListItemText>
				</ButtonMenuPrimary>
			</ListItem>
		</List>
	</StyledWrapper>;
};

Job = React.memo(Job);
Job.defaultProps = {
};
Job.propTypes = {
};

export default Job;
