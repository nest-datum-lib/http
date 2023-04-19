import styled from 'styled-components';
import Box from '@mui/material/Box';

const Wrapper = styled(Box)`
	width: 100%;
	margin-bottom: 24px;
	
	&& .MuiGrid-container{
		gap: 12px;
	}
	&& .MuiGrid-container .MuiButton-root{
		width: 193px;
	}
	&& .MuiGrid-item:first-child{
		padding: 15px 24px 16px 24px;
		background: #FFFFFF;
		box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.08);
		border-radius: 16px;
	}
	&& .MuiPaper-elevation{
		height: 10px;
		box-shadow: none!important;
	}

	&& .paper-got-hired_linear-box{
		display: flex;
    	flex-direction: row;
		align-items: center;
		gap: 32px;
	}

	&& .paper-got-hired_linear-box .MuiPaper-root{
		flex: 1;
	}
`;

export default Wrapper;