import React from 'react';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from 'components/Typography';
import TypographyBody from 'components/Typography/Body';
import { ReactComponent as ArrowDownIconSmall } from 'static/svg/icons/arrowDown-small-light.svg'
import StyledWrapper from './Styled/Wrapper.jsx';

let Accordion = ({ children, ...props }) => {
	return <StyledWrapper { ...props }>
		{(children || []).map((item, index) => {
			return <MuiAccordion key={index}>
				<MuiAccordionSummary expandIcon={<ArrowDownIconSmall /> }>
					<TypographyBody>
						{item.title}
					</TypographyBody>
				</MuiAccordionSummary>
				<MuiAccordionDetails>
					<Typography>
						{item.content}
					</Typography>
				</MuiAccordionDetails>
			</MuiAccordion>;
		})}
	</StyledWrapper>;
};

Accordion = React.memo(Accordion);
Accordion.defaultProps = {
};
Accordion.propTypes = {
};

export default Accordion;
