import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { 
	ContextApp,
	ContextRoute, 
} from '@nest-datum-ui/Context';
import { selectorMainExtract } from '@nest-datum-ui/Store';
import Grid from '@mui/material/Grid';
import Field from '@nest-datum-ui/Field';
import ButtonPrimary from 'components/Button/Primary';
import ButtonSecondary from 'components/Button/Secondary';
import SelectPayPeriod from 'components/Select/PayPeriod';
import InputFloat from 'components/Input/Float';
import StyledWrapper from './Styled/Wrapper.jsx';
import handlerSubmit from './handler/submit.js';

/**
 * https://i.imgur.com/btaMDN6.png
 */
let Pay = (props) => {
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
			Component={SelectPayPeriod}
			apiUrl="test"
			form={id}
			name="period"
			label="Pay Period" />
		<Field
			Component={InputFloat}
			form={id}
			name="payment"
			label=""
			placeholder="Desirable base pay ($)" />
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

Pay = React.memo(Pay);
Pay.defaultProps = {
	onSubmit: () => {},
};
Pay.propTypes = {
	onSubmit: PropTypes.func,
};

export default Pay;
