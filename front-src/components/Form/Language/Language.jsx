import React from 'react';
import { useSelector } from 'react-redux';
import { 
	ContextApp,
	ContextRoute, 
} from '@nest-datum-ui/Context';
import { 
	selectorMainExtract,
	actionApiListSplice, 
} from '@nest-datum-ui/Store';
import Grid from '@mui/material/Grid';
import Field from '@nest-datum-ui/Field';
import SelectLanguage from 'components/Select/Language';
import SelectLanguageLevel from 'components/Select/Language/Level';
import ListLanguage from 'components/List/Language';
import ButtonPrimary from 'components/Button/Primary';
import ButtonSecondary from 'components/Button/Secondary';
import ButtonMenu from 'components/Button/Menu';
import StyledWrapper from './Styled/Wrapper.jsx';
import handlerSubmit from './handler/submit.js';

/**
 * https://i.imgur.com/cz2jES7.png
 */
let Language = (props) => {
	const routeName = React.useContext(ContextRoute);
	const { [routeName]: { form: { storeName, id, apiUrl } } } = React.useContext(ContextApp);
	const data = useSelector(selectorMainExtract([ 'api', 'list', `${storeName}_added`, 'data' ])) || [];
	const userId = useSelector(selectorMainExtract([ 'api', 'form', 'sso-sign-in', 'id' ]));
	const onSubmitWrapper = React.useCallback((e) => {
		handlerSubmit(e, storeName, apiUrl);
	}, [
		storeName,
		apiUrl,
	]);
	const onSubmitAddingWrapper = React.useCallback((e) => {
		handlerSubmit(e, storeName, apiUrl, true);
	}, [
		storeName,
		apiUrl,
	]);
	const onDelete = React.useCallback((e, index) => actionApiListSplice(`${storeName}_added`, index, 1)(), [
		storeName,
	]);

	return <StyledWrapper { ...props }
		storeName={storeName} 
		id={id} 
		onSubmit={onSubmitWrapper}>
		<Field
			Component={SelectLanguage}
			apiUrl="test"
			form={id}
			name="name"
			label="Language" />
		<Field
			Component={SelectLanguageLevel}
			apiUrl="test"
			form={id}
			name="level"
			label="Level" />
		<ListLanguage manage onDelete={onDelete}>
			{data}
		</ListLanguage>
		<ButtonMenu onClick={onSubmitAddingWrapper} className="btn_save-and-add">
			Save and add another one
		</ButtonMenu>
		<Grid container className="btns-form">
			<Grid
				item
				xs={false}>
				<ButtonSecondary to={`/${process.env.ROUTE_AUTHED}/${userId}/${process.env.ROUTE_EXPERIENCE}`}>
					Cancel
				</ButtonSecondary>
			</Grid>
			<Grid
				item
				xs={false}>
				<ButtonPrimary type="submit" form={id}>
					Save
				</ButtonPrimary>
			</Grid>
		</Grid>
	</StyledWrapper>;
};

Language = React.memo(Language);
Language.defaultProps = {
};
Language.propTypes = {
};

export default Language;
