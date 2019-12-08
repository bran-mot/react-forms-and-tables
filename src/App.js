import React from 'react';
import logo from './logo.svg';
import Input from './Components/Input';
import Button from './Components/Button';
import './App.css';

function App() {
	return (
		<div className="App">
			<h1>dynamic heading here</h1>
			<Input type="text" value="First Name" name="first" />
			<Input type="text" value="Last Name" name="last" />
			<Input type="number" value="0" name="age" />
			<Button type="submit">Save</Button>
			<table>
				<thead>
					<tr>
						<th>Table here</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>table body hre</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default App;
