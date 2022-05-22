import axios from "axios";
import React, { useEffect, useState } from "react";


function App(){

	const [user, setUser] = useState([]);
	const [identifier, setIdentifier] = useState(1);
	const [loading, setLoading] = useState(false)

	const getUser = async ()=> {
		// jika belum dapat data maka loading true
		setLoading(true)
		try{
			let response = await axios.get(`https://jsonplaceholder.typicode.com/users/${identifier}`);
			setUser(response.data)

			// jika sudah dapat data loading is false
			setLoading(false)


		} catch(e){
			console.log(e.message);

			// jika error maka loading true
			setLoading(true)
		}
	}

	useEffect(()=>{
		getUser()
	}, [identifier])


	return (
		<div className="py-5">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-8">
						<div className="form-group mb-4">
							<label htmlFor="">Masukan id user</label>
							<input type="text" className="form-control" value={identifier} onChange={(e)=> setIdentifier(e.target.value)} />
						</div>

						{
									loading ? 'Loading ...' : 
							<table className="table table-bordered table-striped table-hover">
								<thead>
									<tr>
										<th>Name</th>
										<th>Username</th>
										<th>Email</th>
										<th>Website</th>
										<th>Phone</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>{user.name}</td>
										<td>{user.username}</td>
										<td>{user.email}</td>
										<td>{user.website}</td>
										<td>{user.phone}</td>
									</tr>
								</tbody>
							</table>


						}
					</div>
				</div>
			</div>
		</div>
	)
}

export default App;
