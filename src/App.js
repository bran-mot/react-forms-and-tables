import React from 'react';
import logo from './logo.svg';
import Input from './Components/Input';
import Button from './Components/Button';
import './App.css';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			first: '',
			last: '',
			age: ''
		};
		this.changeFirst = this.changeFirst.bind(this);
		this.changeLast = this.changeLast.bind(this);
		this.changeAge = this.changeAge.bind(this);
	}

	//functions
	changeFirst(event) {
		this.setState({ first: event.target.value });
	}
	changeLast(event) {
		this.setState({ last: event.target.value });
	}
	changeAge(event) {
		this.setState({ age: event.target.value });
	}

	//render
	render() {
		return (
			<div className="App">
				<h1>
					Hello, {this.state.first} {this.state.last}. You are {this.state.age}{' '}
					years old.
				</h1>
				<Input
					type="text"
					name="first"
					value={this.state.first}
					onChange={this.changeFirst}
				/>
				<Input
					type="text"
					name="last"
					value={this.state.last}
					onChange={this.changeLast}
				/>
				<Input
					type="text"
					name="age"
					value={this.state.age}
					onChange={this.changeAge}
				/>
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
}
