import React from "react";
import "./style.css"

function Hero(props){
    return(
        <div className="hero text-center bgk"{...props}>
        <h1>React-ClickSter</h1>
        {props.children}
        </div>

    );

}

export default Hero;