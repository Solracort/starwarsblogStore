import React, {useEffect, useState, useContext} from "react";
import {Context} from "../store/appContext"
import "../../styles/home.css";
import {Cards} from "../component/cards.jsx"
import {CardPlanet} from "../component/cardPlanet.jsx"
import {CardVehicle} from "../component/cardVehicle.jsx"

export const Home = () => {

	console.log(useContext(Context))

    
    
	

return(
	<>
		<h2 className="text-center">Personajes</h2>
		<div className="container text-center">
			<div className="row row-cols-xs-1 row-cols-sm-3 row-cols-md-6 m-auto">
				{/* {personaje.map((item)=><Cards key={item.uid} id={item.uid} nombre={item.name} />)} */}
			</div>
		</div>
		<h2 className="text-center">Vehicles</h2>
		<div className="container text-center">
			<div className="row row-cols-xs-1 row-cols-sm-3 row-cols-md-6 m-auto">
				{/* {vehicle.map((item)=><CardVehicle key={item.uid} id={item.uid} nombre={item.name} />)} */}
			</div>
		</div>
		<h2 className="text-center">Planets</h2>
		<div className="container text-center">
			<div className="row row-cols-xs-1 row-cols-sm-3 row-cols-md-6 m-auto">
				{/* {planet.map((item)=><CardPlanet key={item.uid} id={item.uid} nombre={item.name} />)} */}
			</div>
		</div>
	</>
);	
}
