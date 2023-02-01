import React, {useEffect, useState} from "react";
import "../../styles/home.css";
import {Cards} from "../component/cards.jsx"



export const Home = () => {

	const [personaje,setPersonaje] = useState([])
	const [caracteristica,setCaracteristica]=useState({})
	

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
    function getAPIcaracteristicas(){
		personaje.map((item)=>{
			console.log(item.uid)
			fetch("https://www.swapi.tech/api/people/"+item.uid)
			.then(res => res.json())
			.then(data =>{ 
				console.log("esto es"+ data);
				setCaracteristica(data.result.properties)
			})
			.catch(err => console.error(err))
			})
    }
    useEffect(()=>{
		getAPIName();
        getAPIcaracteristicas();
    },[])
	

return(
	<>
		<h2 className="text-center">Personajes</h2>
		<div className="container text-center">
			<div className="row row-cols-xs-1 row-cols-sm-3 row-cols-md-5 m-auto">
				{personaje.map((item)=><Cards key={item.uid} id={item.uid} nombre={item.name} genero={caracteristica.gender} pelo={caracteristica.hair_color} ojos={caracteristica.eye_color}/>)}
			</div>
		</div>
	</>
);	
}
