import React from 'react';
import { useSelector } from 'react-redux';
import { 
	ContextApp,
	ContextRoute, 
} from '@nest-datum-ui/Context';
import { selectorMainExtract } from '@nest-datum-ui/Store';
import TypographyTitle from 'components/Typography/Title';
import FormUploadCv from 'components/Form/UploadCv';
import StyledWrapper from './Styled/Wrapper.jsx';

let UploadCv = (props) => {
	const routeName = React.useContext(ContextRoute);
	const { [routeName]: { form: { storeName } } } = React.useContext(ContextApp);
	const loader = useSelector(selectorMainExtract([ 'api', 'form', storeName, 'loader' ]));

	return <StyledWrapper { ...props }>
		{(loader === false || loader === undefined)
			&& <TypographyTitle>
				Add CV
			</TypographyTitle>}
			<FormUploadCv />
	</StyledWrapper>;
};

UploadCv = React.memo(UploadCv);
UploadCv.defaultProps = {
};
UploadCv.propTypes = {
};

export default UploadCv;
