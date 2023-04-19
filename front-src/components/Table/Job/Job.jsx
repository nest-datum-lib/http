import React from 'react';
import { useSelector } from 'react-redux';
import { 
	ContextApp,
	ContextRoute, 
} from '@nest-datum-ui/Context';
import { 
	selectorMainExtract,
	actionApiListPage,
	actionApiListGet,
} from '@nest-datum-ui/Store';
import TypographyStatus from 'components/Typography/Status';
import Row from './Row';
import StyledWrapper from './Styled/Wrapper.jsx';

let Job = (props) => {
	const routeName = React.useContext(ContextRoute);
	const { [routeName]: { form: { storeName } } } = React.useContext(ContextApp);
	const data = useSelector(selectorMainExtract([ 'api', 'list', storeName, 'data' ]));
	const dataLength = (data || []).length;
	const total = useSelector(selectorMainExtract([ 'api', 'list', storeName, 'total' ])) ?? 0;
	const page = useSelector(selectorMainExtract([ 'api', 'list', storeName, 'page' ]));
	const limit = useSelector(selectorMainExtract([ 'api', 'list', storeName, 'limit' ]));
	const onChangePage = React.useCallback((e, newPage) => actionApiListPage(storeName, newPage), [
		storeName,
	]);

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

	return <StyledWrapper 
		{ ...props }
		disablePurge
		length={dataLength}
		total={total}
		page={page}
		limit={limit}
		onChange={onChangePage}
		headRowCells={[{
			id: 'company',
			name: <TypographyStatus color="dark">
				Company
			</TypographyStatus>,
		}, {
			id: 'position',
			name: <TypographyStatus color="dark">
				Job title
			</TypographyStatus>,
		}, {
			id: 'rate',
			name: <TypographyStatus color="dark">
				Salary
			</TypographyStatus>,
		}, {
			id: 'appliedAt',
			name: <TypographyStatus color="dark">
				Applied time&date
			</TypographyStatus>,
		}, {
			id: 'statusId',
			name: <TypographyStatus color="dark">
				Status
			</TypographyStatus>,
		}]}>
		{data
			&& data.map((item, index) => <Row
				key={item.id}
				id={item.id}
				position={item.position}
				company={item.company}
				rate={item.rate}
				location={item.location}
				statusId={item.statusId}
				tagId={item.tagId}
				recomendation={item.recomendation}
				createdAt={item.createdAt}
				appliedAt={item.appliedAt} />)}
	</StyledWrapper>;
};

Job = React.memo(Job);
Job.defaultProps = {
};
Job.propTypes = {
};

export default Job;
