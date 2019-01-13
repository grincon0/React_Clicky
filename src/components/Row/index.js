import React from "react";

function Row(props){
    return <div className={`row${props.fluid ? "-fluid" : ""}`}></div>

}

export default Row;