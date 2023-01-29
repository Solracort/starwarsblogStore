import React, {useEffect, useState} from "react";
import "../../styles/home.css";
import {Cards} from "../component/cards.jsx"


export const Home = () => {

	const [personaje,setPersonaje] = useState([])
    function getAPIName(){
        fetch("https://www.swapi.tech/api/people/")
        .then(res => res.json())
        //.then(data => console.log(data))
		.then(data =>{ 
			console.log(data);
			setPersonaje(data.results)
		})
        .catch(err => console.error(err))
    }
    
	useEffect(()=>{
    
    getAPIName();
    
},[])
console.log(personaje)
return(
	<>
		<div className="container text-center">
			<div className="row row-cols-xs-1 row-cols-sm-2 row-cols-md-3">
				{personaje.map((item)=><Cards key={item.uid}  nombre={item.name} genero={item.gender} pelo={item.hair_color} ojos={item.eye_color}/>)}
			</div>
		</div>
	</>
);	
}
