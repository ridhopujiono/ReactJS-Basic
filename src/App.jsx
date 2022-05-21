import React from "react";
import axios from "axios";
class App extends React.Component {

	// Constructor
	constructor() {
		super();
		// Membuat state, didalamnya terdapat objek users
		this.state = {
			users: []
		}

	}

	// Buat Funsi Asyncronus
	getUsers = async () => {
		// Buat variabel untuk menangkap API dengan axios
		let response = await axios.get("https://jsonplaceholder.typicode.com/users/10");

		// Untuk mengSET / mengisi state users
		this.setState({
			users: response.data
		});
	}

	// Mount fungsi getUsers()
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
