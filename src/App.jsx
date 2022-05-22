import React, { useState } from "react";
import Card from "./components/Card";


function App(){

	return (
		<div className="p-5">
			<div className="container">
				<div className="row">
					<div className="col-md-4">
						<Card
							// cara pertama
							// imageSource="http://placekitten.com/100/100"
							// titlePost="First Post"
							// publishedPost="1 Januari 2002"

							// cara kedua dengan object dalam object

							content=
							{
								{
									imageSource:"http://placekitten.com/100/100",
									titlePost:"First Post",
									publishedPost:"1 Januari 2002",
								}
							}
						/>
					</div>
					<div className="col-md-4">
						<Card 
							content=
							{
								{
									imageSource:"http://placekitten.com/g/100/100",
									titlePost:"Second Post",
									publishedPost:"2 Januari 2002",
								}
							}
						/>
					</div>
					<div className="col-md-4">
						<Card
							content=
							{
								{
									imageSource:"http://placekitten.com/100/100",
									titlePost:"Third Post",
									publishedPost:"3 Januari 2002",
								}
							}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App;
