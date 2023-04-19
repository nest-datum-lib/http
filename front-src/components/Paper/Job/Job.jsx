import React from 'react';
import { useSelector } from 'react-redux';
import { 
	ContextApp,
	ContextRoute, 
} from '@nest-datum-ui/Context';
import { selectorMainExtract } from '@nest-datum-ui/Store';
import ListJob from 'components/List/Job';
import TableJob from 'components/Table/Job';
import PaperFilter from '../Filter';
import StyledWrapper from './Styled/Wrapper.jsx';

let Job = (props) => {
	const routeName = React.useContext(ContextRoute);
	const { [routeName]: { form: { storeName } } } = React.useContext(ContextApp);
	const viewType = useSelector(selectorMainExtract([ 'api', 'list', storeName, 'viewType' ])) || 'table';

	return <StyledWrapper { ...props }>
		<PaperFilter />
		{(viewType === 'list')
			? <ListJob />
			: <TableJob />}
	</StyledWrapper>;
};

Job = React.memo(Job);
Job.defaultProps = {
};
Job.propTypes = {
};

export default Job;
