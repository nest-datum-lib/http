import React from 'react';
import { useSelector } from 'react-redux';
import { 
	ContextApp,
	ContextRoute, 
} from '@nest-datum-ui/Context';
import { selectorMainExtract } from '@nest-datum-ui/Store';
import Grid from '@mui/material/Grid';
import Field from '@nest-datum-ui/Field';
import Checkbox from 'components/Checkbox';
import InputText from 'components/Input/Text';
import ButtonPrimary from 'components/Button/Primary';
import ButtonSecondary from 'components/Button/Secondary';
import StyledWrapper from './Styled/Wrapper.jsx';
import handlerSubmit from './handler/submit.js';

/**
 * https://i.imgur.com/oczkbhB.png
 */
let Relocate = (props) => {
	const routeName = React.useContext(ContextRoute);
	const { [routeName]: { form: { storeName, id, apiUrl } } } = React.useContext(ContextApp);
	const userId = useSelector(selectorMainExtract([ 'api', 'form', 'sso-sign-in', 'id' ]));
	const onSubmitWrapper = React.useCallback((e) => handlerSubmit(e, storeName, apiUrl), [
		storeName,
		apiUrl,
	]);

	return <StyledWrapper { ...props }
		storeName={storeName} 
		id={id} 
		onSubmit={onSubmitWrapper}>
		<Field
			Component={Checkbox}
			form={id}
			name="isReady"
			label="Want to relocate" />
		<Field
			Component={InputText}
			form={id}
			name="place"
			placeholder="Place to relocate" />
		<Field
			Component={Checkbox}
			form={id}
			name="isAnyPlace"
			label="Anywhere" />
		<Grid container className="btns-form">
			<Grid
				item
				xs={false}>
				<ButtonSecondary to={`/${process.env.ROUTE_AUTHED}/${userId}/${process.env.ROUTE_JOB_PREFERENCES}`}>
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

Relocate = React.memo(Relocate);
Relocate.defaultProps = {
};
Relocate.propTypes = {
};

export default Relocate;
