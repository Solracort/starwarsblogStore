import { Link } from "react-router-dom";
import React, {useState, useEffect} from "react"
import "../../styles/home.css";

export const CardVehicle = (props) => {
    const [caracteristica,setCaracteristica]=useState({})
    return (
        // https://starwars-visualguide.com/assets/img/characters/1.jpg pagina para traer las imagenes
            <div className="tarjeta col mt-2 me-1" >
                <img src={"https://starwars-visualguide.com/assets/img/vehicles/"+ props.id +".jpg"} className="card-img-top w-50 m-2" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.nombre}</h5>
                    <div id="botones" className="w-100 m-3">
                    <Link to ={"/biovehicle/"+props.id} className="btn btn-outline-primary ">Learn More</Link>
                    <Link onClick={()=>actions.addFav(props.nombre, props.id)} 
                    to ="" className="btn btn-outline-warning "><i className="fa fa-heart text-warning" />
                    </Link>
                    </div>
                </div>
            </div>
    );
};
