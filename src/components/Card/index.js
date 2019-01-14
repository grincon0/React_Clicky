import React from "react";
import "./style.css";


function Card(props) {
    return (
        <div className="card picHolder" {...props} style={{width: '19rem', height: '13rem'}}>
            <img handleBtnClick={props.handleBtnClick} 
            style={{borderRadius: '4px',width: '18rem', height: '12rem'}} 
            className="card-img-top" 
            key={props.id} src={props.img} 
            alt="eeee" />
        </div>

    );

}

export default Card;