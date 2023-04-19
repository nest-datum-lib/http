import React from 'react';
import PropTypes from 'prop-types';
import Typography from 'components/Typography';
import StyledWrapper from './Styled/Wrapper.jsx';
import StyledLabel from './Styled/Label.jsx';

let Info = ({ title, subtitle, label, ...props }) => {
	return <StyledWrapper 
		{ ...props } 
		label={label ?? <StyledLabel>
			<Typography>
				{title}
			</Typography>
			<Typography>
				{subtitle}
			</Typography>
		</StyledLabel>} />;
};

Info = React.memo(Info);
Info.defaultProps = {
};
Info.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string,
};

export default Info;
