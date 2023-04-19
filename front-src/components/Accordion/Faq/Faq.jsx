import React from 'react';
import StyledWrapper from './Styled/Wrapper.jsx';

let Faq = (props) => {
	return <StyledWrapper { ...props }>
		{[{
			title: 'How Apply4Me works?',
			content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
		}, {
			title: 'How I can understand what is hapennig to my CV?',
			content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
		}, {
			title: 'Where I can see all applied jobs?',
			content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
		}, {
			title: 'Is there a limit how many application i will have?',
			content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
		}, {
			title: 'What personal information do you use for Apply for me?',
			content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
		}, {
			title: 'How long shoul i wait for the respond?',
			content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
		}, {
			title: 'Can I change a CV for applied position?',
			content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
		}]}
	</StyledWrapper>;
};

Faq = React.memo(Faq);
Faq.defaultProps = {
};
Faq.propTypes = {
};

export default Faq;
