import React from 'react';
import { ReactComponent as SvgIconsUploadSmall } from 'static/svg/icons/upload-small.svg';
import StyledWrapper from './Styled/Wrapper.jsx';

let Upload = (props) => {
	return <StyledWrapper { ...props }>
		<SvgIconsUploadSmall />
	</StyledWrapper>;
};

Upload = React.memo(Upload);
Upload.defaultProps = {
};
Upload.propTypes = {
};

export default Upload;
