import React from 'react';
import TypographyTitle from 'components/Typography/Title';
import AccordionFaq from 'components/Accordion/Faq';
import ButtonSecondary from 'components/Button/Secondary';
import PaperTitle from '../../Title';
import StyledWrapper from './Styled/Wrapper.jsx';

let Accordion = (props) => {
	return <React.Fragment>
		<PaperTitle>
			<TypographyTitle>
				Title
			</TypographyTitle>
		</PaperTitle>
		<StyledWrapper { ...props }>
			<AccordionFaq />
		</StyledWrapper>
		<ButtonSecondary to={`/${process.env.ROUTE_AUTHED}/${process.env.ROUTE_SUPPORT}`}>
			Back
		</ButtonSecondary>
	</React.Fragment>;
};

Accordion = React.memo(Accordion);
Accordion.defaultProps = {
};
Accordion.propTypes = {
};

export default Accordion;
