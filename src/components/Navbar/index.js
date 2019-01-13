import React from "react";
import { Link } from "react-router-dom";


function NavBar(props){


    return(

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
            Clickster
            </Link>
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        Click any image to begin
                    </li>
                    <li className="nav-item">
                        <h4>Score: {props.state.score} </h4>
                        <h4>|</h4>
                        <h4>High Score: {props.state.high}</h4>
                    </li>
                </ul>
            </div>
        </nav>



    );
}

export default NavBar;
