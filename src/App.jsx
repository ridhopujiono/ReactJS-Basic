import React from "react";
import axios from "axios";
class App extends React.Component {

	// Constructor
	constructor() {
		super();

		this.state = {
			users: []
		}

	}

	getUsers = async () => {
		let response = await axios.get("https://jsonplaceholder.typicode.com/users/10");
		this.setState({
			users: response.data
		});
	}

	componentDidMount(){
		this.getUsers()
	}

	
	render() {

		const userapi = this.state.users;
		return (
		<div>
			<ul>
				<li>Nama : {userapi.name}</li>
			</ul>
		</div>
	);
}
}

export default App;
