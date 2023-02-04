import React, { useState, useEffect, useContext} from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Bioplanet = () => {
	const { store, actions } = useContext(Context);
    const params = useParams()
    
    useEffect(()=>{
            actions.getAPIcaracteristicasPlanets(params.theid)
    },[])
	return (
        
        
        <div className="container d-flex">
		    
            <div className="jumbotron">
                <img src={"https://starwars-visualguide.com/assets/img/planets/"+ params.theid +".jpg"} />
            </div>
            <div className="m-3">
                <h1>{store.caracteristicaPlaneta.name}</h1>
                <h3>Description</h3>
                <h3>{store.caracteristicaPlaneta.description}</h3>
                <hr/>
                <p>
                </p>
                <Link to="/">
                <button className="btn btn-primary">Back home</button>
			</Link>
            </div>
            
            
		</div>
	);
};