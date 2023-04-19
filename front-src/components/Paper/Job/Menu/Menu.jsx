import React from 'react';
import MenuJob from 'components/Menu/Job';
import Paper from '../../Paper.jsx';
import StyledWrapper from './Styled/Wrapper.jsx';

let Menu = (props) => {
	return <StyledWrapper { ...props }>
		<Paper>
			<MenuJob />
		</Paper>
	</StyledWrapper>;
};

Menu = React.memo(Menu);
Menu.defaultProps = {
};
Menu.propTypes = {
};

export default Menu;
