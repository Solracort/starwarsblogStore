import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (

		<ul className="navegacion nav nav-pills w-100 m-2 mt-2 d-flex justify-content-between">
			<li className="nav-item">
				<a className="nav-link active" aria-current="page" href="#">Active</a>
			</li>
			
			
			<li className="nav-item dropdown ms-3">
				
				<a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Favorites</a>
				<ul className="dropdown-menu">
					<li><a className="dropdown-item" href="#">Action</a></li>
					<li><a className="dropdown-item" href="#">Another action</a></li>
					<li><a className="dropdown-item" href="#">Something else here</a></li>
					<li><hr className="dropdown-divider"/></li>
					<li><a className="dropdown-item" href="#">Separated link</a></li>
				</ul>
			</li>
		</ul>


		
	);
};
