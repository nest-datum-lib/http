import styled from 'styled-components';
import List from '../../List.jsx';

const Wrapper = styled(List)`
	& .listBoxScroll > .MuiGrid-root {
		display: flex;
		flex-wrap: wrap-reverse;

		& > .MuiBox-root {
			min-width: 50%;
			max-width: 50%;
		}
	}
`;

export default Wrapper;