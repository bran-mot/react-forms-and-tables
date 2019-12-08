import React from 'react';

export default function Input(props) {
	return <button type={props.type}>{props.children}</button>;
}
