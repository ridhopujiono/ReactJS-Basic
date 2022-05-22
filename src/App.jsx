import React, { useState } from "react";


function App(){

	// Membuat hook
	// firstname adalah variabelnya dan setFirstname adalah function sebagai value dari variabel firstname
	const [firstname, setFirstname] = useState('');
	const [lastname, setLastname] = useState('');
	const [name, setName] = useState('');

	const submitHandler = (e) => {
		e.preventDefault();

		setName(`${firstname} ${lastname}`)
		
		setFirstname('')
		setLastname('')
	}

	return (
		<div className="p-5">
			<div className="container">
				<div className="row">
					<div className="col-md-4">
						<div className="card">
							<div className="card-body">
								<form onSubmit={submitHandler}>
									<div className="form-group mb-4">
										<label htmlFor="" className="form-label">Firstname</label>
										<input type="text" value={firstname}
										// Maksudnya adalah jika nputan firstname itu di onchange atau dirubah maka lakukan function setFirstname() dimana disitu berfungsi untuk meng set atau mengisi variabel firstname
										onChange={(e) => setFirstname(e.target.value)} name="firstname" className="form-control" />
									</div>
									<div className="form-group mb-4">
										<label htmlFor="" className="form-label">Lastname</label>
										<input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} name="lastname" className="form-control" />
									</div>
									<div className="form-group">
										<button type="submit" className="btn btn-primary btn-block">Show</button>
									</div>
								</form>
							</div>
							<div className="card-footer">
								My Name is {(name ? name : '...')}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App;
