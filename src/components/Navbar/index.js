import React from "react";
import "./style.css";

function NavBar(props) {
    return (
        <nav className="navbar navbar-expand-lg nav-back">
            
                <ul className="navbar-nav full">
                    <li className="nav-item">
                        <a href="/">Clickster</a>
                    </li>
                </ul>
            
            <div style={{width:'100%', marginTop: '15px'}} >
                <p style={{color: 'white',float: 'right'}}>Score: {props.score} | High Score: {props.high} </p>
            </div>
        </nav>
    );
}

export default NavBar;
