import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import ChipEditableInfo from 'components/Chip/Editable/Info';
import StyledWrapper from './Styled/Wrapper.jsx';

let Language = ({ children, manage, onDelete, ...props }) => {
	const onDeleteWrapper = React.useCallback((index) => (e) => onDelete(e, index), [
		onDelete,
	]);

	return <StyledWrapper { ...props }>
		{children
			.map((item, index) => <Box key={item.id} className="list-language__item-wrapper">
				<ChipEditableInfo
					{ ...manage ? { onDelete: onDeleteWrapper(index) } : {} }
					index={index}
					title={item.name}
					subtitle={item.level} />
			</Box>)}
	</StyledWrapper>;
};
Language = React.memo(Language);
Language.defaultProps = {
	children: [],
	onDelete: () => {},
};
Language.propTypes = {
	manage: PropTypes.bool,
	children: PropTypes.array,
	onDelete: PropTypes.func,
};

export default Language;
