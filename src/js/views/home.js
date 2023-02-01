import React, {useEffect, useState} from "react";
import "../../styles/home.css";
import {Cards} from "../component/cards.jsx"
import {CardPlanet} from "../component/cardPlanet.jsx"
import {CardVehicle} from "../component/cardVehicle.jsx"

export const Home = () => {

	const [personaje,setPersonaje] = useState([])
	const [vehicle,setVehicle] = useState([])
	const [planet,setPlanet] = useState([])

    function getAPIName(){
        fetch("https://www.swapi.tech/api/people/")
        .then(res => res.json())
        //.then(data => console.log(data))
		.then(data =>{ 
			//console.log(data);
			setPersonaje(data.results)
		})
        .catch(err => console.error(err))
    }
	function getPlanet(){
		fetch("https://www.swapi.tech/api/planets/")
		.then(res => res.json())
		.then(data => {
			console.log(data)
			setPlanet(data.results)})
		.catch(err => console.error(err))
	}
	function getVehicle(){
		fetch("https://www.swapi.tech/api/vehicles/")
		.then(res => res.json())
		.then(data => {
			console.log(data)
			setVehicle(data.results)})
		.catch(err => console.error(err))
	}
    useEffect(()=>{
		getAPIName();
		getVehicle();
		getPlanet();        
    },[])
	

return(
	<>
		<h2 className="text-center">Personajes</h2>
		<div className="container text-center">
			<div className="row row-cols-xs-1 row-cols-sm-3 row-cols-md-6 m-auto">
				{personaje.map((item)=><Cards key={item.uid} id={item.uid} nombre={item.name} />)}
			</div>
		</div>
		<h2 className="text-center">Vehicles</h2>
		<div className="container text-center">
			<div className="row row-cols-xs-1 row-cols-sm-3 row-cols-md-6 m-auto">
				{vehicle.map((item)=><CardVehicle key={item.uid} id={item.uid} nombre={item.name} />)}
			</div>
		</div>
		<h2 className="text-center">Planets</h2>
		<div className="container text-center">
			<div className="row row-cols-xs-1 row-cols-sm-3 row-cols-md-6 m-auto">
				{planet.map((item)=><CardPlanet key={item.uid} id={item.uid} nombre={item.name} />)}
			</div>
		</div>
	</>
);	
}
