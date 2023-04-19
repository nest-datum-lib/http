import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import StyledWrapper from './Styled/Wrapper.jsx';

let Dots = ({ children, steps, activeStep, Component, dotProps, onChange, disableState, ...props }) => {
	const [ step, setStep ] = React.useState(() => activeStep);
	const onChangeWrapper = React.useCallback((index) => (e) => {
		if (!disableState) {
			setStep(index);
		}
		onChange(e, index);
	}, [
		disableState,
		onChange,
	]);

	return <StyledWrapper { ...props } container alignItems="center" justifyContent="space-between" className={`${props.className || ''} stepper-dots__wrapper`}>
		{children ?? (() => {
			let i = 0,
				output = [];

			while (i < steps) {
				output.push(Component
					? <Component { ...dotProps }
						key={i} 
						index={i}  
						onClick={onChangeWrapper(i)}
						active={(step === i)} />
					: <Box { ...dotProps }
						key={i} 
						onClick={onChangeWrapper(i)}
						className={`${dotProps.className || ''} stepper-dots__dot-item ${(step === i) ? ' active' : ''}`} />);
				i++;
			}
			return output;
		})()}
	</StyledWrapper>;
};

Dots = React.memo(Dots);
Dots.defaultProps = {
	activeStep: 0,
	steps: 3,
	dotProps: {},
	onChange: () => {},
};
Dots.propTypes = {
	children: PropTypes.array,
	activeStep: PropTypes.number,
	steps: PropTypes.number,
	dotProps: PropTypes.object,
	onChange: PropTypes.func,
	disableState: PropTypes.bool,
};

export default Dots;
