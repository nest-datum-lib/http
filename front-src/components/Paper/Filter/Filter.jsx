import React from 'react';
import { useSelector } from 'react-redux';
import { 
	ContextApp,
	ContextRoute, 
} from '@nest-datum-ui/Context';
import { 
	selectorMainExtract,
	actionApiListProp, 
} from '@nest-datum-ui/Store';
import Grid from '@mui/material/Grid';
import MenuIcon from '@mui/icons-material/Menu';
import WindowIcon from '@mui/icons-material/Window';
import IconButton from 'components/IconButton';
import SelectStatus from 'components/Select/Status';
import StyledWrapper from './Styled/Wrapper.jsx';

let Filter = (props) => {
	const routeName = React.useContext(ContextRoute);
	const { [routeName]: { form: { storeName } } } = React.useContext(ContextApp);
	const viewType = useSelector(selectorMainExtract([ 'api', 'list', storeName, 'viewType' ])) || 'table';
	const onList = React.useCallback(() => actionApiListProp(storeName, 'viewType', 'list')(), [
		storeName,
	]);
	const onTable = React.useCallback(() => actionApiListProp(storeName, 'viewType', 'table')(), [
		storeName,
	]);

	return <StyledWrapper { ...props }>
		<Grid container>
			<Grid item xs={false}>
				View:
			</Grid>
			<Grid item xs={false}>
				<IconButton { ...(viewType === 'table') ? { disabled: true } : { onClick: onTable } }>
					<MenuIcon />
				</IconButton>
			</Grid>
			<Grid item xs={false}>
				<IconButton { ...(viewType === 'list') ? { disabled: true } : { onClick: onList } }>
					<WindowIcon />
				</IconButton>
			</Grid>
			<Grid item xs={false}>
				<SelectStatus 
					name="statusId"
					label="Status" />
			</Grid>
		</Grid>
	</StyledWrapper>;
};

Filter = React.memo(Filter);
Filter.defaultProps = {
};
Filter.propTypes = {
};

export default Filter;
