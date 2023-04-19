import styled from 'styled-components';
import Menu from '@nest-datum-ui/Menu';

const Wrapper = styled(Menu)`
	& span.MuiButtonBase-root {
		pointer-events: none;

		& .MuiListItemText-root > .MuiTypography-root {
			text-transform: initial;
		}
	}
`;

export default Wrapper;