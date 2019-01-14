import React from "react";
import "./style.css";


function Card(props) {
    return (
        <div className="card  picHolder" {...props} style={{width: '16rem', height: '10rem'}}>
            <img handleBtnClick={props.handleBtnClick} className="card-img-top" key={props.id} src={props.img} alt="eeee" />
        </div>

    );

}

export default Card;