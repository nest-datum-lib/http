import React from 'react';
import { useSelector } from 'react-redux';
import { 
	ContextApp,
	ContextRoute, 
} from '@nest-datum-ui/Context';
import { 
	selectorMainExtract,
	actionApiListGet, 
} from '@nest-datum-ui/Store';
import Progress from '@nest-datum-ui/Progress';
import Typography from '@mui/material/Typography';
import PaperJobItem from 'components/Paper/Job/Item';
import StyledWrapper from './Styled/Wrapper.jsx';
import StyledNotEmpty from './Styled/NotEmpty.jsx';
import StyledEmpty from './Styled/Empty.jsx';

let Job = () => {
	const routeName = React.useContext(ContextRoute);
	const { [routeName]: { form: { storeName/*, apiUrl*/ } } } = React.useContext(ContextApp);
	const length = useSelector(selectorMainExtract([ 'api', 'list', storeName, 'data', 'length' ]));
	const loader = useSelector(selectorMainExtract([ 'api', 'list', storeName, 'loader' ]));
	const loaderProcessed = loader === true || !(length > 0);

	React.useEffect(() => {
		actionApiListGet(storeName, {
			data: [{
				id: '1',
				position: 'Client Service Specialist',
				company: 'EY (former Ernst & Young LLC)',
				rate: '246$/hour',
				location: 'Los Angelos - California',
				statusId: '1',
				tagId: '1',
				recomendation: '4.00$',
				createdAt: (new Date()).toISOString(),
			}, {
				id: '2',
				position: 'Client Service Specialist',
				company: 'EY (former Ernst & Young LLC)',
				rate: '300$/hour',
				location: 'New York - California',
				statusId: '2',
				tagId: '2',
				recomendation: '4.00$',
				createdAt: (new Date()).toISOString(),
			}, {
				id: '3',
				position: 'Client Service Specialist',
				company: 'EY (former Ernst & Young LLC)',
				rate: '246$/hour',
				location: 'Los Angelos - California',
				statusId: '3',
				createdAt: (new Date()).toISOString(),
			}, {
				id: '4',
				position: 'Client Service Specialist',
				company: 'EY (former Ernst & Young LLC)',
				rate: '300$/hour',
				location: 'New York - California',
				statusId: '4',
				createdAt: (new Date()).toISOString(),
			}],
		})();
	}, [
		storeName,
	]);

	return <StyledWrapper disablePurge>
		<Progress visible={loaderProcessed} />
		{(length > 0)
			? <StyledNotEmpty>
				{(loaderProcessed === false) && <PaperJobItem />}
			</StyledNotEmpty>
			: (loader === false)
				&& <StyledEmpty visible={Number(length === 0)}>
					<Typography
						variant="subtitle2"
						color="secondary">
						No entries created.
					</Typography>
				</StyledEmpty>}
	</StyledWrapper>;
};

Job = React.memo(Job);
Job.defaultProps = {
};
Job.propTypes = {
};

export default Job;
