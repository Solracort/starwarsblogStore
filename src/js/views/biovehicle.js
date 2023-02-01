import React, { useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";

export const Biovehicle = () => {
	// const { store, actions } = useContext(Context);
    const params = useParams([])
    const [caracteristica,setCaracteristica]= useState({})
    const [description,setDescription] = useState({})
    function getAPIcaracteristicas(){
        fetch("https://www.swapi.tech/api/vehicle/"+params.theid)
        .then(res => res.json())
        //.then(data => console.log(data))
		.then(data =>{ 
			//console.log(data.result);
			setCaracteristica(data.result.properties)
            setDescription(data.result)
		})
        .catch(err => console.error(err))
    }
    useEffect(()=>{
            getAPIcaracteristicas();
    },[])
	return (
        
        
        <div className="container d-flex">
		    
            <div className="jumbotron">
                <img src={"https://starwars-visualguide.com/assets/img/vehicles/"+ params.theid +".jpg"} />
            </div>
            <div className="m-3">
                <h1>{caracteristica.name}</h1>
                <h3>Description</h3>
                <h3>{description.description}</h3>
                <hr/>
                <p>
                Model:{caracteristica.model +" "} Cargo Capacity:{caracteristica.cargo_capacity + " "} Passengers:{caracteristica.passengers}
                </p>
                <Link to="/">
                <button className="btn btn-primary">Back home</button>
			</Link>
            </div>
            
            
		</div>
	);
};