import React from 'react';
import { useSelector } from 'react-redux';
import { 
	ContextApp,
	ContextRoute, 
} from '@nest-datum-ui/Context';
import { 
	selectorMainExtract,
	// actionApiListGet, 
	actionApiListClear,
	actionApiListPush,
	actionApiListSplice,
} from '@nest-datum-ui/Store';
import Grid from '@mui/material/Grid';
import TypographyBody from 'components/Typography/Body';
import Field from '@nest-datum-ui/Field';
import InputSkills from 'components/Input/Skills';
import ButtonPrimary from 'components/Button/Primary';
import ButtonSecondary from 'components/Button/Secondary';
import ListSkills from 'components/List/Skills';
import StyledWrapper from './Styled/Wrapper.jsx';
import handlerSubmit from './handler/submit.js';

const list = [
	`AdobePhotoshop`,
	`AdobeIllustrator`,
	`Figma`,
	`c++`,
	`react`,
	`nodejs`,
	`python`,
];

/**
 * https://i.imgur.com/tiQLXbG.png
 */
let Skills = (props) => {
	const routeName = React.useContext(ContextRoute);
	const { [routeName]: { form: { storeName, id, apiUrl, nextPageUrl, prevPageUrl } } } = React.useContext(ContextApp);
	const suggestedSkillsStoreName = `${storeName}SuggestedSkills`;
	const selectedSkillsStoreName = `${storeName}SelectedSkills`;
	const [ viewAll, setViewAll ] = React.useState();
	const suggestedSkillsData = useSelector(selectorMainExtract([ 'api', 'list', suggestedSkillsStoreName, 'data' ]));
	const selectedSkillsData = useSelector(selectorMainExtract([ 'api', 'list', selectedSkillsStoreName, 'data' ]));
	const onSubmitWrapper = React.useCallback((e) => handlerSubmit(e, selectedSkillsStoreName, apiUrl, nextPageUrl), [
		selectedSkillsStoreName,
		apiUrl,
		nextPageUrl,
	]);
	const onSelect = React.useCallback((e, value, index) => actionApiListPush(selectedSkillsStoreName, value)(), [
		selectedSkillsStoreName,
	]);
	const onAdd = React.useCallback((e, value, index) => actionApiListPush(selectedSkillsStoreName, value)(), [
		selectedSkillsStoreName,
	]);
	const onDelete = React.useCallback((e, value, index) => actionApiListSplice(selectedSkillsStoreName, index, 1)(), [
		selectedSkillsStoreName,
	]);

	React.useEffect(() => {
		// TODO
		// actionApiListGet(storeName, { url: apiListUrl })();
		actionApiListClear(suggestedSkillsStoreName, {
			page: 1,
			limit: 20,
			data: list,
		})();
		actionApiListClear(selectedSkillsStoreName, { data: [] })();
	}, [
		suggestedSkillsStoreName,
		selectedSkillsStoreName,
		// apiListUrl
	]);
	const onCollapse = React.useCallback((storeName) => (e, open) => setViewAll(open ? storeName : undefined), [
	]);

	return <StyledWrapper { ...props }
		storeName={storeName} 
		id={id} 
		onSubmit={onSubmitWrapper}>
		{(!viewAll || viewAll !== suggestedSkillsStoreName)
		&& <TypographyBody>
			Add your core skills
		</TypographyBody>}
		{!viewAll
			&& <Field
				Component={InputSkills}
				form={id}
				name="skills"
				placeholder="Skills"
				onAdd={onAdd}
				className="inputSkills"
				onSelect={onSelect} />}
		{(!viewAll || viewAll !== suggestedSkillsStoreName)
		&& <ListSkills manage onDelete={onDelete} onCollapse={onCollapse(selectedSkillsStoreName)}>
			{selectedSkillsData}
		</ListSkills>}
		{(!viewAll || viewAll !== selectedSkillsStoreName)
			&& <React.Fragment>
				<TypographyBody className="typographyBodySecond">
					Suggested skills
				</TypographyBody>
				<ListSkills onCollapse={onCollapse(suggestedSkillsStoreName)}>
					{suggestedSkillsData}
				</ListSkills>
			</React.Fragment>}
		{!viewAll
			&& <Grid container className='btns-form'>
				<Grid
					item
					xs={false}>
					<ButtonSecondary to={prevPageUrl}>
					Cancel
					</ButtonSecondary>
				</Grid>
				<Grid
					item
					xs={false}>
					<ButtonPrimary onClick={onSubmitWrapper}>
					Save
					</ButtonPrimary>
				</Grid>
			</Grid>}
	</StyledWrapper>;
};

Skills = React.memo(Skills);
Skills.defaultProps = {
};
Skills.propTypes = {
};

export default Skills;
