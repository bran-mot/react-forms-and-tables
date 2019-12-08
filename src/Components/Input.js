import React from 'react';
import PropTypes from 'prop-types';
import { types } from '@babel/core';

Input.propTypes = {
	value: PropTypes.any,
	name: PropTypes.string.isRequired,
	type: PropTypes.string,
	onChange: PropTypes.func
};

export default function Input(props) {
	return (
		<input
			type={props.type}
			value={props.value}
			name={props.name}
			onChange={props.changeHandler}
		/>
	);
}
