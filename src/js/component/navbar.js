import React,{useContext} from "react";
import { Link } from "react-router-dom";
import {Context} from "../store/appContext";
import "../../styles/home.css"
import logo from "../../img/swbluelogo.png"

export const Navbar = () => {
	const {store,actions}= useContext(Context)
	return (
		<ul className="navegacion nav nav-pills w-100 m-2 mt-2 d-flex justify-content-between">
			<li className="nav-item">
				<img className="claseLogo" src={logo}/>
			</li>
			<li className="nav-item dropdown ms-3">
				<a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="true">Favorites</a>
				<ul className="dropdown-menu">
					{store.listaFavs.map((item,index) => (
					<li key={index}>
						{item} <button onClick={()=>actions.deleteFav(index)}>x</button>
					</li>
					))}
				</ul>
			</li>
		</ul>
	);
};
