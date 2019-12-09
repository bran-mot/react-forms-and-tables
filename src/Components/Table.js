import React from 'react';

export default function(props) {
	debugger;
	return (
		<table>
			<thead>
				<tr>
					<th>First Name</th>
					<th>Last Name</th>
					<th>Age</th>
				</tr>
			</thead>
			<tbody>
				{props.people.map(person => {
					return (
						<tr>
							<td>{person.first}</td>
							<td>{person.last}</td>
							<td>{person.age}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}
