import React from 'react';
import TypographyBody from 'components/Typography/Body';
import FormProfile from 'components/Form/Profile';
import StyledWrapper from './Styled/Wrapper.jsx';

let Edit = (props) => {
	return <StyledWrapper { ...props }>
		<TypographyBody className="paper-profile_title-form">
			Add your personal information
		</TypographyBody>
		<FormProfile />
	</StyledWrapper>;
};

Edit = React.memo(Edit);
Edit.defaultProps = {
};
Edit.propTypes = {
};

export default Edit;
