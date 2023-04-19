import React from 'react';

let Size = () => {
	return <div>
		<div>Uploaded file is too large.</div>
		<div>Choose another file (less than 5 MB).</div>
	</div>;
};
Size = React.memo(Size);
Size.defaultProps = {
};
Size.propTypes = {
};

export default Size;
