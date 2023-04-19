import React from 'react';

let Format = () => {
	return <div>
		<div>Format is not supported.</div>
		<div>Choose another file in .pdf, .doc, or .docx</div>
	</div>;
};
Format = React.memo(Format);
Format.defaultProps = {
};
Format.propTypes = {
};

export default Format;
