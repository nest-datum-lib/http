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
import SelectDaysOfWeek from 'components/Select/DaysOfWeek';
import SelectShifts from 'components/Select/Shifts';
import StyledWrapper from './Styled/Wrapper.jsx';
import handlerSubmit from './handler/submit.js';

/**
 * https://i.imgur.com/Ys264G7.png
 */
let Schedule = (props) => {
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
            Component={SelectDaysOfWeek}
            form={id}
            apiUrl="test"
            name="days"
            label="Days of week" />
        <Field
            Component={SelectShifts}
            form={id}
            apiUrl="test"
            name="shifts"
            label="Shifts" />
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

Schedule = React.memo(Schedule);
Schedule.defaultProps = {
    onSubmit: () => {},
};
Schedule.propTypes = {
    onSubmit: PropTypes.func,
};

export default Schedule;
