import { Link } from "react-router-dom";
import React from "react"
import "../../styles/home.css";

export const Cards = (props) => {
        
	return (
        // https://starwars-visualguide.com/assets/img/characters/1.jpg pagina para traer las imagenes
            <div className="tarjeta col mt-2 me-1" >
                <img src={"https://starwars-visualguide.com/assets/img/characters/"+ props.id +".jpg"} className="card-img-top w-50 m-2" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.nombre}</h5>
                    <div className="card-text text-start m-3">
                        <div>Gender:{props.genero}</div>
                        <div>Hair Color:{props.pelo}</div>
                        <div>Eye-Color:{props.ojos}</div>
                    </div>
                    <div id="botones" className="w-100 m-3">
                    <Link to ={"/bio/"+props.id} className="btn btn-outline-primary ">Learn More</Link>
                    <Link to ="" className="btn btn-outline-warning "><i className="fa fa-heart text-warning" /></Link>
                    </div>
                </div>
            </div>
    );
};
