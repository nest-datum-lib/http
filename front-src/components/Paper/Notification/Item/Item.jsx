import React from 'react';
import { format } from 'date-fns';
import { ContextList } from '@nest-datum-ui/Context';
import Grid from '@mui/material/Grid';
import TypographyCaption from 'components/Typography/Caption';
import TypographyInfoPrimary from 'components/Typography/Info/Primary';
import TypographyBodyPrimary from 'components/Typography/Body/Primary';
import { ReactComponent as SvgIconsCompanySmall } from 'static/svg/icons/company-small.svg';
import { ReactComponent as SvgIconsObTitleSmall } from 'static/svg/icons/obTitle-small.svg';
import { ReactComponent as SvgIconsSalarySmall } from 'static/svg/icons/salary-small.svg';
import StyledWrapper from './Styled/Wrapper.jsx';

let Item = (props) => {
	const { title, subtitle, company, position, rate, createdAt } = React.useContext(ContextList);

	return <StyledWrapper { ...props }>
		<Grid container justifyContent="space-between">
			<Grid item xs={true}>
				<TypographyInfoPrimary className="notifyTitle">
					{title}
				</TypographyInfoPrimary>
			</Grid>
			<Grid item xs={false}>
				<TypographyCaption className="dateNotify">
					{format(new Date(createdAt), 'MM/dd/yyyy')}
				</TypographyCaption>
			</Grid>
		</Grid>
		<TypographyBodyPrimary className="notifySubTitle">
			{subtitle}
		</TypographyBodyPrimary>
		<Grid container className="boxNotifyTags">
			<Grid item xs={true}>
				<TypographyInfoPrimary startIcon={<SvgIconsCompanySmall />}>
					{company}
				</TypographyInfoPrimary>
			</Grid>
			<Grid item xs={true}>
				<TypographyInfoPrimary startIcon={<SvgIconsObTitleSmall />}>
					{position}
				</TypographyInfoPrimary>
			</Grid>
			<Grid item xs={true}>
				<TypographyInfoPrimary startIcon={<SvgIconsSalarySmall />}>
					{rate}
				</TypographyInfoPrimary>
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
