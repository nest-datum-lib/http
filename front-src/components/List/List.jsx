import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { arrFilled as utilsCheckArrFilled } from '@nest-datum-utils/check';
import { 
	ContextApp,
	ContextRoute,
	ContextList, 
} from '@nest-datum-ui/Context';
import { 
	selectorMainExtract,
	actionApiListGet, 
	actionApiListPurge,
} from '@nest-datum-ui/Store';
import StepperDots from 'components/Stepper/Dots';
import StyledWrapper from './Styled/Wrapper.jsx';
import Grid from '@mui/material/Grid';

let ListMemo = ({ 
	loader, 
	loadOnFirstRender, 
	disableMap, 
	children, 
	mobileWithDots, 
	disablePurge, 
	...props 
}) => {
	const routeName = React.useContext(ContextRoute);
	const { [routeName]: { form: { storeName, apiUrl } } } = React.useContext(ContextApp);
	const data = useSelector(selectorMainExtract([ 'api', 'list', storeName, 'data' ]));
	const loaderProcessed = loader === true || !utilsCheckArrFilled(data);
	const scrollOffers = React.useCallback((e, index) => {
		const scroll = index * window.screen.width
		const box = document.getElementById("listBoxScroll");

		box.style.webkitTransitionDuration = "0.3s";
		box.style.webkitTransitionTimingFunction = "ease-out";
		box.style.marginLeft = (scroll!==0?"-":"")+scroll+"px";
	}, [
	]);

	React.useEffect(() => {
		if (loadOnFirstRender === true) {
			actionApiListGet(storeName, { apiUrl })();
		}
	}, [
		loadOnFirstRender,
		storeName,
		apiUrl,
	]);

	React.useEffect(() => () => {
		if (storeName && !disablePurge) {
			actionApiListPurge(storeName)();
		}
	}, [
		storeName,
		disablePurge,
	]);

	return <React.Fragment>
		<Grid className="listBoxScroll" id="listBoxScroll">
			<Grid className="listBox">
				{(disableMap === true)
				? <ContextList.Provider value={{ data, loader: loaderProcessed }}>
					{!loaderProcessed && children}
				</ContextList.Provider>
				: (!loaderProcessed
					&& data.map((item) => <ContextList.Provider key={item.id} value={{ loader: loaderProcessed, ...item }}>
						{!loaderProcessed && children}
					</ContextList.Provider>))}
			</Grid>
		</Grid>
		{mobileWithDots && <StepperDots steps={3} activeStep={0} onChange={scrollOffers} />}
	</React.Fragment>;
};

ListMemo = React.memo(ListMemo);

let List = ({ className, id, ...props }) => {
	const routeName = React.useContext(ContextRoute);
	const { [routeName]: { form: { storeName } } } = React.useContext(ContextApp);
	const unmount = useSelector(selectorMainExtract([ 'loader', 'unmount', 'visible' ]));
	const loader = useSelector(selectorMainExtract([ 'api', 'list', storeName, 'data', 'loader' ]));
	const data = useSelector(selectorMainExtract([ 'api', 'list', storeName, 'data' ]));
	const loaderProcessed = loader || unmount === true || !utilsCheckArrFilled(data);

	return <StyledWrapper className={className} id={id} loader={Number(loaderProcessed)}>
		<ListMemo { ...props } loader={loaderProcessed} />
	</StyledWrapper>;
};

List = React.memo(List);
List.defaultProps = {
};
List.propTypes = {
	loadOnFirstRender: PropTypes.bool,
	disableMap: PropTypes.bool,
	mobileWithDots: PropTypes.bool,
};

export default List;
