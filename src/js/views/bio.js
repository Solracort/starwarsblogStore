import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Bio = () => {
	const { store, actions } = useContext(Context);
    const params = useParams()
 
    useEffect(()=>{
            actions.getAPIcaracteristicasPeople(params.theid)

    },[])

console.log(store.caracteristicaPersonaje)

	return (
        
        
        <div className="container d-flex">
		    
            <div className="jumbotron">
               <img src={"https://starwars-visualguide.com/assets/img/characters/"+ params.theid +".jpg"} />
            </div>
            <div className="m-3">
                <h1>{store.caracteristicaPersonaje.name}</h1> 
                <h3>Description</h3>
                <h3>{store.caracteristicaPersonaje.description}</h3>
                <hr/>
                <p>
                Height:{store.caracteristicaPersonaje.height +" "} Gender:{store.caracteristicaPersonaje.gender + " "} Hair color:{store.caracteristicaPersonaje.hair_color}
                </p> 
                <Link to="/">
                <button className="btn btn-primary">Back home</button>
			</Link>
            </div>
            
            
		</div>
	);
};
