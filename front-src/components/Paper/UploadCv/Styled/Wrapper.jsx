import styled from 'styled-components';
import PaperPrimary from '../../Primary';

const Wrapper = styled(PaperPrimary)`
	border: none !important;
	margin-top: 99px;
	text-align: center;
	
	@media (max-width: 600px) {
        margin-top: 0px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		gap: calc(100vh / 10);
    	padding: 0px;

		&& .MuiBox-root > .form-children__wrapper{
			display: flex;
			flex-direction: column;
			gap: calc(100vh / 10);
		}
    }
`;

export default Wrapper;