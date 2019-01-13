import React from "react";
import "./style.css";

function Card(props){
    return(
        <div className="card">
            <img className="card-img-top" id={props.id} src={props.img} alt="Pict"/>

        </div>
    );

}

export default Card;