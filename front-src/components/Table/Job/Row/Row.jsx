import React from 'react';
import { format } from 'date-fns';
import TableCell from '@mui/material/TableCell';
import TypographySubtitle from 'components/Typography/Subtitle';
import StyledWrapper from './Styled/Wrapper.jsx';

let Row = ({
	id,
	position,
	company,
	rate,
	location,
	statusId,
	tagId,
	recomendation,
	createdAt,
	appliedAt,
	...props
}) => {
	return <StyledWrapper { ...props }>
		<TableCell>
			<TypographySubtitle>
				{company}
			</TypographySubtitle>
		</TableCell>
		<TableCell>
			<TypographySubtitle>
				{position}
			</TypographySubtitle>
		</TableCell>
		<TableCell>
			<TypographySubtitle>
				{rate}
			</TypographySubtitle>
		</TableCell>
		<TableCell>
			<TypographySubtitle>
				{appliedAt
					? format(new Date(appliedAt), 'MM/dd/yyyy hh:mm')
					: '-'}
			</TypographySubtitle>
		</TableCell>
		<TableCell>
			<TypographySubtitle>
				Applied
			</TypographySubtitle>
		</TableCell>
	</StyledWrapper>;
};

Row = React.memo(Row);
Row.defaultProps = {
};
Row.propTypes = {
};

export default Row;
