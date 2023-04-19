import React from 'react';
import Grid from '@mui/material/Grid';
import StyledWrapper from './Styled/Wrapper.jsx';

/**
 * https://i.imgur.com/Vu5AeLH.png
 */
let Typography = ({ startIcon, children, ...props }) => {
	return <StyledWrapper { ...props }>
        {startIcon
            ? <Grid container spacing={1} component="span">
                <Grid item xs={false} component="span">
                    {startIcon}
                </Grid>
                <Grid item xs={false} component="span">
                    {children}
                </Grid>
            </Grid>
            : children}
    </StyledWrapper>;
};

Typography = React.memo(Typography);
Typography.defaultProps = {
};
Typography.propTypes = {
};

export default Typography;
