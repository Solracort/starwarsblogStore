import React, { useState, useEffect, useContext} from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const Biovehicle = () => {
	// const { store, actions } = useContext(Context);
    const params = useParams([])
    const { store, actions } = useContext(Context);
    
    useEffect(()=>{
            actions.getAPIcaracteristicasVehicles(params.theid);
    },[])
	return (
        
        
        <div className="container d-flex">
		    
            <div className="jumbotron">
                <img src={"https://starwars-visualguide.com/assets/img/vehicles/"+ params.theid +".jpg"} />
            </div>
            <div className="m-3">
                <h1>{store.caracteristicaVehiculo.name}</h1>
                <h3>Description</h3>
                <h3>{store.caracteristicaVehiculo.description}</h3>
                <hr/>
                <p>Model: {store.caracteristicaVehiculo.model +" "} </p>
                <p>Cargo Capacity: {store.caracteristicaVehiculo.cargo_capacity + " "}</p>
                <p>Passengers: {store.caracteristicaVehiculo.passengers}</p>
                 
                
                <Link to="/">
                    <button className="btn btn-primary">Back home</button>
			    </Link>
            </div>
            
            
		</div>
	);
};