import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import ChipEditable from 'components/Chip/Editable';
import ButtonCaption from 'components/Button/Caption';
import StyledWrapper from './Styled/Wrapper.jsx';

let Skills = ({ children, manage, max, onCollapse, onDelete, ...props }) => {
	const [ open, setOpen ] = React.useState(() => false);
	const onCollapseWrapper = React.useCallback((e) => {
		setOpen(!open)
		onCollapse(e, !open);
	}, [
		onCollapse,
		setOpen,
		open,
	]);
	const onDeleteWrapper = React.useCallback((value, index) => (e) => onDelete(e, value, index), [
		onDelete,
	]);

	return <StyledWrapper { ...props }>
		{children
			.slice(0, open ? children.length : max)
			.map((item, index) => <Box key={item} className="list-skills__item-wrapper">
				<ChipEditable 
					{ ...manage ? { onDelete: onDeleteWrapper(item, index) } : {} }
					index={index} 
					label={item} />
			</Box>)}
		{children.length > 3 
			&& <ButtonCaption onClick={onCollapseWrapper}>
				{open
					? 'close'
					: 'view all'}
			</ButtonCaption>}
	</StyledWrapper>;
};
Skills = React.memo(Skills);
Skills.defaultProps = {
	children: [],
	max: 3,
	onCollapse: () => {},
	onDelete: () => {},
};
Skills.propTypes = {
	manage: PropTypes.bool,
	children: PropTypes.array,
	max: PropTypes.number,
	onCollapse: PropTypes.func,
	onDelete: PropTypes.func,
};

export default Skills;
