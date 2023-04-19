import React from 'react';
import { ContextList } from '@nest-datum-ui/Context';
import Grid from '@mui/material/Grid';
import ButtonLink from '@nest-datum-ui/Button/Link';
import TypographyStatus from 'components/Typography/Status';
import TypographyStatusPrimary from 'components/Typography/Status/Primary';
import TypographySubtitle from 'components/Typography/Subtitle';
import ChipTag from 'components/Chip/Tag';
import { ReactComponent as SvgIconsCompanySmall } from 'static/svg/icons/company-small.svg';
import { ReactComponent as SvgIconsExpirienceSmall } from 'static/svg/icons/expirience-small.svg';
import { ReactComponent as SvgIconsSalarySmall } from 'static/svg/icons/salary-small.svg';
import { ReactComponent as SvgIconsLocationSmall } from 'static/svg/icons/location-small.svg';
import { ReactComponent as SvgIconsShareSmall } from 'static/svg/icons/share-small.svg';
import StyledWrapper from './Styled/Wrapper.jsx';

let Item = (props) => {
	const { id, position, company, rate, location, statusId, tagId, recomendation } = React.useContext(ContextList);

	return <StyledWrapper 
		{ ...props } 
		component={(props) => <ButtonLink { ...props } disableHref />} 
		to={`${window.location.pathname}/${id}`}
		fullWidth>
		<TypographyStatusPrimary startIcon={<SvgIconsExpirienceSmall />}>
			{position}
		</TypographyStatusPrimary>
		<TypographyStatus color="dark" startIcon={<SvgIconsCompanySmall />}>
			<b>{company}</b>
		</TypographyStatus>
		<TypographySubtitle startIcon={<SvgIconsSalarySmall />}>
			{rate}
		</TypographySubtitle>
		<TypographySubtitle startIcon={<SvgIconsLocationSmall />}>
			{location}
		</TypographySubtitle>
		<Grid container justifyContent="space-between">
			<Grid container item xs={true}>
				{statusId
					&& <Grid item xs={false}>
						<ChipTag label="Interview" />
					</Grid>}
				{tagId
					&& <Grid item xs={false}>
						<ChipTag label="Easy Apply" />
					</Grid>}
			</Grid>
			{recomendation
				&& <Grid item xs={false}>
					<ChipTag label={`= ${recomendation}`} icon={<SvgIconsShareSmall />} />
				</Grid>}
		</Grid>
	</StyledWrapper>;
};

Item = React.memo(Item);
Item.defaultProps = {
};
Item.propTypes = {
};

export default Item;
