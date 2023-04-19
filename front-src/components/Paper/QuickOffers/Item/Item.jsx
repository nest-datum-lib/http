import React from 'react';
import { ContextList } from '@nest-datum-ui/Context';
import Grid from '@mui/material/Grid';
import TypographySubtitlePrimary from 'components/Typography/Subtitle/Primary';
import TypographyBody from 'components/Typography/Body';
import StyledWrapper from './Styled/Wrapper.jsx';

let Item = (props) => {
	const { company, title, location, salary } = React.useContext(ContextList);

	return <StyledWrapper { ...props }>
		<Grid container>
			<Grid 
				item
				xs={false}>
				<TypographySubtitlePrimary>
					Company
				</TypographySubtitlePrimary>
				<TypographyBody>
					{company}
				</TypographyBody>
			</Grid>
			<Grid 
				item
				xs={false}>
				<TypographySubtitlePrimary>
					Title
				</TypographySubtitlePrimary>
				<TypographyBody>
					{title}
				</TypographyBody>
			</Grid>
			<Grid 
				item
				xs={false}>
				<TypographySubtitlePrimary>
					Salary
				</TypographySubtitlePrimary>
				<TypographyBody>
					{salary}
				</TypographyBody>
			</Grid>
			<Grid 
				item
				xs={false}>
				<TypographySubtitlePrimary>
					Location
				</TypographySubtitlePrimary>
				<TypographyBody>
					{location}
				</TypographyBody>
			</Grid>
		</Grid>
	</StyledWrapper>;
};

Item = React.memo(Item);
Item.defaultProps = {
};
Item.propTypes = {
};

export default Item;
