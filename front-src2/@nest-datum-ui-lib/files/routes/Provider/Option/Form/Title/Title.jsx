import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FILES_PATH_PROVIDER_OPTION } from '@nest-datum-ui-lib/files/consts/path.js';
import selectorMainExtract from '@nest-datum-ui/components/Store/main/selectors/extract.js';
import Box from '@mui/material/Box';
import TypographyTitleRoute from '@nest-datum-ui/components/Typography/Title/Route';
import hooksSetBreadcrumbs from './hooks/setBreadcrumbs.jsx';

let Title = () => {
	const { entityId } = useParams();
	const isDeleted = useSelector(selectorMainExtract([ 'api', 'form', FILES_PATH_PROVIDER_OPTION, 'isDeleted' ]));
	
	React.useEffect(() => hooksSetBreadcrumbs(entityId, isDeleted), [
		entityId,
		isDeleted,
	]);

	return <React.Fragment>
		<Box pb={2}>
			<TypographyTitleRoute
				entityId={entityId}
				isDeleted={isDeleted}
				defaultContent="Add option">
				Edit option
			</TypographyTitleRoute>
		</Box>
	</React.Fragment>;
};

Title = React.memo(Title);
Title.defaultProps = {
};
Title.propTypes = {
};

export default Title;
