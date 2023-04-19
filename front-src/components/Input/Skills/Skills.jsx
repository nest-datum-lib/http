import React from 'react';
import AddItem from './AddItem';
import StyledWrapper from './Styled/Wrapper.jsx';
import CustomPaper from './Styled/Paper.jsx';

let Skills = (props) => {
	return <StyledWrapper { ...props } PaperComponent={CustomPaper} />;
};

Skills = React.memo(Skills);
Skills.defaultProps = {
	options: [
		`AdobePhotoshop`,
		`AdobeIllustrator`,
		`Figma`,
		`c++`,
		`react`,
		`nodejs`,
		`python`
	],
	AddItemComponent: AddItem,
	clearOnBlur: true,
	clearOnChange: true,
	addNewValue: true,
};
Skills.propTypes = {
};

export default Skills;
