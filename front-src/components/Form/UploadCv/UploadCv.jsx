import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { 
	ContextApp,
	ContextRoute, 
} from '@nest-datum-ui/Context';
import { selectorMainExtract } from '@nest-datum-ui/Store';
import { objFileList as utilsCheckObjFileList } from '@nest-datum-utils/check';
import Field from '@nest-datum-ui/Field';
import Typography from 'components/Typography';
import TypographySuccess from 'components/Typography/Success';
import PaperDashed from 'components/Paper/Dashed';
import InputUpload from 'components/Input/Upload';
import ButtonPrimary from 'components/Button/Primary';
import ProgressProfileCreate from 'components/Progress/Profile/Create';
import StyledWrapper from './Styled/Wrapper.jsx';
import handlerSubmit from './handler/submit.js';

/**
 * https://i.imgur.com/NUNuOSo.png
 * https://i.imgur.com/3iIktUR.png
 */
let UploadCv = ({ onSubmit, ...props }) => {
	const routeName = React.useContext(ContextRoute);
	const { [routeName]: { form: { storeName, id, apiUrl, nextPageUrl } } } = React.useContext(ContextApp);
	const loader = useSelector(selectorMainExtract([ 'api', 'form', storeName, 'loader' ]));
	const value = useSelector(selectorMainExtract([ 'api', 'form', storeName, 'file' ]));
	const fileSelectedFlag = utilsCheckObjFileList(value);
	const onSubmitWrapper = React.useCallback((e) => {
		handlerSubmit(e, storeName, apiUrl, nextPageUrl);
		onSubmit(e);
	}, [
		storeName,
		apiUrl,
		nextPageUrl,
		onSubmit,
	]);

	return <StyledWrapper { ...props }
		storeName={storeName} 
		id={id} 
		onSubmit={onSubmitWrapper}
		ProgressComponent={ProgressProfileCreate}>
		{(loader === false || loader === undefined) 
		&& <React.Fragment>
			<PaperDashed>
				<Field
					Component={InputUpload}
					form={id}
					name="file"
					label="Upload CV"
					accept="application/pdf,application/doc,application/docx" />
				{fileSelectedFlag
					? <TypographySuccess>
						File selected: {value[0]['name']}
					</TypographySuccess>
					: <Typography>
						Uploaded file will be processed and displayed as profile information
					</Typography>}
			</PaperDashed>
			<Typography className="paper-cvbuilder_typography-or">
				or
			</Typography>
			<ButtonPrimary type="submit" form={id}>
				Build HAPP CV
			</ButtonPrimary>
		</React.Fragment>}
	</StyledWrapper>;
};

UploadCv = React.memo(UploadCv);
UploadCv.defaultProps = {
	onSubmit: () => {},
};
UploadCv.propTypes = {
	onSubmit: PropTypes.func,
};

export default UploadCv;
