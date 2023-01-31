import { Link } from "react-router-dom";
import React from "react"
import "../../styles/home.css";



export const Cards = (props) => {
    
	return (
       
            <div className="col" >
                <img src="#" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.nombre}</h5>
                    <div className="card-text text-start">
                        <div>Gender:{props.genero}</div>
                        <div>Hair Color:{props.pelo}</div>
                        <div>Eye-Color:{props.ojos}</div>
                    </div>
                    <div id="botones" className="w-50 m-3">
                    <Link to ="" className="btn btn-outline-primary ">Learn More</Link>
                    <Link to ="" className="btn btn-outline-warning "><i className="fa fa-heart text-warning" /></Link>
                    </div>
                </div>
            </div>
        
	);
};
