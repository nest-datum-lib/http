import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TypographyDate from '@nest-datum-ui/components/Typography/Date';
import FormsTypographyField from '@nest-datum-ui-lib/forms/components/Typography/Field';
import SsoTypographyUser from '@nest-datum-ui-lib/sso/components/Typography/User';

let Item = ({
	id,
	fieldId,
	contentId,
	userId,
	dataTypeId,
	fieldName,
	fieldDescription,
	createdAt,
	value,
	onDrop,
}) => {
	return <React.Fragment key={id}>
		<TableRow>
			<TableCell sx={{ minWidth: '20%' }}>
				{fieldName
					? <Typography component="div">
						{fieldName}
					</Typography>
					: <FormsTypographyField>
						{fieldId}
					</FormsTypographyField>}
			</TableCell>
			<TableCell sx={{ width: '39%' }}>
				<Typography component="div">
					{String(value)}
				</Typography>
			</TableCell>
			<TableCell sx={{ width: '20%' }}>
				<SsoTypographyUser>
					{userId}
				</SsoTypographyUser>
			</TableCell>
			<TableCell sx={{ width: '20%' }}>
				<TypographyDate>
					{createdAt}
				</TypographyDate>
			</TableCell>
			<TableCell sx={{ width: '1%' }}>
				<IconButton onClick={onDrop}>
					<CloseIcon color="error" />
				</IconButton>
			</TableCell>
		</TableRow>
	</React.Fragment>;
};

Item = React.memo(Item);
Item.defaultProps = {
};
Item.propTypes = {
	id: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]).isRequired,
	fieldId: PropTypes.string,
	contentId: PropTypes.string,
	userId: PropTypes.string,
	dataTypeId: PropTypes.string,
	fieldName: PropTypes.string,
	fieldDescription: PropTypes.string,
	createdAt: PropTypes.string,
	onDrop: PropTypes.func,
};

export default Item;
