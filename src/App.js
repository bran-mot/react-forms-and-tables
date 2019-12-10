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
				id: '',
				first: '',
				last: '',
				age: ''
			},
			first: '',
			last: '',
			age: '',
			people: [
				{
					id: '1',
					first: 'John',
					last: 'Smith',
					age: 24
				},
				{
					id: '2',
					first: 'Mary',
					last: 'Johnson',
					age: '66'
				}
			]
		};
		this.changeFirst = this.changeFirst.bind(this);
		this.changeLast = this.changeLast.bind(this);
		this.changeAge = this.changeAge.bind(this);
		this.submitForm = this.submitForm.bind(this);
		this.deletePerson = this.deletePerson.bind(this);
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
				newPerson: Object.assign({}, previousState.newPerson, {
					id: previousState.people.length + 1
				}),
				people: previousState.people.concat(previousState.newPerson),
				newPerson: Object.assign({
					first: '',
					last: '',
					age: ''
				})
			};
		});
	}

	deletePerson(id) {
		console.log('test');
		this.setState(previousState => {
			return {
				people: previousState.people.filter(person => person.id !== id)
			};
		});
	}

	//render
	render() {
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
				<Table people={this.state.people} onDelete={this.deletePerson} />
			</div>
		);
	}
}
