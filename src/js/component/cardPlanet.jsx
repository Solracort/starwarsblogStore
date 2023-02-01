import { Link } from "react-router-dom";
import React, {useState, useEffect} from "react"
import "../../styles/home.css";

	
export const CardPlanet = (props) => {
    const [caracteristica,setCaracteristica]=useState({})

    function getAPIcaracteristicas(){
			fetch("https://www.swapi.tech/api/planets/"+props.id)
			.then(res => res.json())
			.then(data =>{ 
				//console.log("Planeta"+ data.result);
				setCaracteristica(data.result)
			})
			.catch(err => console.error(err))
			}
    
    useEffect(()=>{
		getAPIcaracteristicas();
    },[])
	
    
	return (
        // https://starwars-visualguide.com/assets/img/characters/1.jpg pagina para traer las imagenes
            <div className="tarjeta col mt-2 me-1" >
                <img src={"https://starwars-visualguide.com/assets/img/planets/"+ props.id +".jpg"} className="card-img-top w-50 m-2" alt="PLANET PIC" />
                <div className="card-body">
                    <h5 className="card-title">{props.nombre}</h5>
                    <div className="card-text text-start m-3 d-block">
                        <div>Population: {caracteristica.gender}</div>
                        <div>Terrain: {caracteristica.hair_color}</div>
                        
                    </div>
                    <div id="botones" className="w-100 m-3">
                    <Link to ={"/bioplanet/"+props.id} className="btn btn-outline-primary ">Learn More</Link>
                    <Link to ="" className="btn btn-outline-warning "><i className="fa fa-heart text-warning" /></Link>
                    </div>
                </div>
            </div>
    );
};
