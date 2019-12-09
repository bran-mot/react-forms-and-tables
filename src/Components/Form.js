import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

export default function Form(props) {
	return (
		<form onSubmit={props.onSubmit}>
			{props.children}
			<Button type="submit">Save</Button>
		</form>
	);
}
