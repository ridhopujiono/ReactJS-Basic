import React from "react";
class App extends React.Component {

	constructor(){
		super();


		this.state = {
			firstname: '',
			lastname: '',
			name: '',
		}
	}
	
	changeHandler = (e)=>{
		this.setState({
			// mengapa seperti berikut ? [e.target.name]
			// jadi disini tujuanya untuk setState objek atau property sesuai dengan input name, dan mengisinya dengan value
			 [e.target.name] : e.target.value
		});
	}

	submitHandler = (e)=>{ 
		e.preventDefault();
		this.setState({
			name: `${this.state.firstname} ${this.state.lastname}`
		})
		this.state.firstname = '';
		this.state.lastname = '';
	}
	render() {
		// ini sama dengan const name = this.state.name
		const {name} = this.state;
		return (
			<div className="container">
				<div className="row p-5">
					<div className="col-md-4">
						<div className="card">
							<div className="card-header">Formulir</div>
							<div className="card-body">
								<form onSubmit={this.submitHandler}>
									<div className="form-group mb-4">
										<label htmlFor="firstname">First Name</label>
										<input onChange={this.changeHandler} value={this.state.firstname} type="text" className="form-control" name="firstname" />
									</div>
									<div className="form-group mb-4">
										<label htmlFor="lastname">Last Name</label>
										<input onChange={this.changeHandler} value={this.state.lastname} type="text" className="form-control" name="lastname" />
									</div>
									<div className="form-group">
										<button type="submit" className="btn btn-primary d-block w-100">Show</button>
									</div>
								</form>
							</div>
							<div className="card-footer">
								{/* Ini hanya ternary */}
								My Name is {(name ? name : '....')}
							</div>
						</div>
						
					</div>
				</div>
			</div>
		);
}
}

export default App;
