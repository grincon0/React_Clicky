import React from "react";
import "./style.css";

function Card(props){
    return(
        <div className="card">
            <img className="card-img-top" src={props.img} alt="Pict"/>

        </div>
    );

}

export default Card;