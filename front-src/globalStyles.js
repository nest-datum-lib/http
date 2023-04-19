import { createGlobalStyle } from 'styled-components';
import "@fontsource/jost";

export default createGlobalStyle`
	body,
	html {
		margin: 0;
		padding: 0 !important;
		outline: none;
		display: block;
		height: 100%;
	}
	body {
		width: 100%;
		margin: 0 auto;
		font-family: Jost;
	}
	#root {
		position: relative;
		overflow-x: hidden;
		padding: 0px;
		height: 100%;
		max-height: 100%;
	}
	.ck.ck-editor__main {
		.ck-restricted-editing_mode_standard {
			min-height: 300px !important;
		}
	}
	.input-date-range__error-wrapper,
	.Mui-error {
		font-weight: 400!important;
		font-size: 14px!important;
		line-height: 20px!important;
		color: #D03375!important;
	}
`;
