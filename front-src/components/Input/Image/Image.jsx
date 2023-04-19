import React from 'react';
import PropTypes from 'prop-types';
import {
	arr as utilsCheckArr,
	objFileList as utilsObjFileList,
	strFilled as utilsCheckStrFilled,
} from '@nest-datum-utils/check';
import Box from '@mui/material/Box';
import IconButtonEditImage from 'components/IconButton/Edit/Image';
import StyledWrapper from './Styled/Wrapper.jsx';

let Image = ({ name, maxSize, onChange, value, defaultValue, storeName, ...props }) => {
	const refBox = React.useRef(null);
	const [ initialValue ] = React.useState(() => value ?? defaultValue);
	const [ state, setState ] = React.useState(() => undefined);
	const onChangeWrapper = React.useCallback((e) => {
		if (e.target.files && e.target.files[0]) { 
			const fileSize = e.target.files[0].size / 1024 / 1024;

			if (fileSize <= 2) {
				const reader = new FileReader();

				reader.addEventListener('load', () => setState(reader.result), false);
				reader.readAsDataURL(e.target.files[0]);

				onChange(e);
			}
		}
	}, [
		onChange,
		setState,
	]);

	React.useEffect(() => {
		if (utilsCheckArr(initialValue) || utilsObjFileList(initialValue)) {
			const reader = new FileReader();

			reader.addEventListener('load', () => setState(reader.result), false);
			reader.readAsDataURL(initialValue[0]);
		}
		else if (utilsCheckStrFilled(initialValue)) {
			setState(initialValue);
		}
	}, [
		initialValue,
		setState,
	]);

	React.useLayoutEffect(() => {
		const el = refBox.current.parentElement.parentElement;
		el.style.height = el.offsetWidth+"px"
	}, []);

	return <StyledWrapper { ...props } 
		component="label" 
		ref={refBox}>
		<Box { ...state ? { sx: { backgroundImage: `url(${state})` } } : {} }>
			<IconButtonEditImage component="span" isfilechoozen={state}/>
		</Box>
		<input 
			name={name}
			type="file"
			accept="image/png, image/jpg, image/jpeg"
			onChange={onChangeWrapper}
			style={{
				display: 'none',
			}} />
	</StyledWrapper>;
};

Image = React.memo(Image);
Image.defaultProps = {
	onChange: () => {},
	maxSize: 2,
};
Image.propTypes = {
	name: PropTypes.string.isRequired,
	onChange: PropTypes.func,
	maxSize: PropTypes.number, // in MiB
};

export default Image;
