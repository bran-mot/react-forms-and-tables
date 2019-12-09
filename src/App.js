import React from 'react';
import logo from './logo.svg';
import Form from './Components/Form';
import Input from './Components/Input';
import Button from './Components/Button';
import './App.css';
import Table from './Components/Table';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			newPerson: {
				first: '',
				last: '',
				age: ''
			},
			first: '',
			last: '',
			age: '',
			people: []
		};
		this.changeFirst = this.changeFirst.bind(this);
		this.changeLast = this.changeLast.bind(this);
		this.changeAge = this.changeAge.bind(this);
		this.submitForm = this.submitForm.bind(this);
	}

	//functions
	changeFirst(event) {
		var newFirst = event.target.value;
		this.setState(previousState => {
			return {
				newPerson: Object.assign({}, previousState.newPerson, {
					first: newFirst
				})
			};
		});
	}
	changeLast(event) {
		var newLast = event.target.value;
		this.setState(previousState => {
			return {
				newPerson: Object.assign({}, previousState.newPerson, {
					last: newLast
				})
			};
		});
	}
	changeAge(event) {
		var newAge = event.target.value;
		this.setState(previousState => {
			return {
				newPerson: Object.assign({}, previousState.newPerson, {
					age: newAge
				})
			};
		});
	}
	submitForm(event) {
		event.preventDefault();
		this.setState(previousState => {
			return {
				people: previousState.people.concat(previousState.newPerson),
				newPerson: Object.assign({
					first: '',
					last: '',
					age: ''
				})
			};
		});
	}
	//render
	render() {
		let isBlank;
		if (
			this.state.newPerson.age != '' ||
			this.state.newPerson.first != '' ||
			this.state.newPerson.last != ''
		) {
			isBlank = false;
		} else {
			isBlank = true;
		}

		return (
			<div className="App">
				<h1>
					{this.state.newPerson.first != '' ? (
						<span>Hello, {this.state.newPerson.first} </span>
					) : (
						''
					)}
					{this.state.newPerson.last != '' ? (
						<span>{this.state.newPerson.last}. </span>
					) : (
						''
					)}
					{this.state.newPerson.age ? (
						<span>You are {this.state.newPerson.age} years old.</span>
					) : (
						''
					)}
				</h1>
				<Form onSubmit={this.submitForm}>
					<Input
						type="text"
						name="first"
						value={this.state.newPerson.first}
						onChange={this.changeFirst}
					/>
					<Input
						type="text"
						name="last"
						value={this.state.newPerson.last}
						onChange={this.changeLast}
					/>
					<Input
						type="text"
						name="age"
						value={this.state.newPerson.age}
						onChange={this.changeAge}
					/>
				</Form>
				<Table people={this.state.people} />
			</div>
		);
	}
}
