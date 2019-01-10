import React from 'react';
import "./style.css";

function Banner (props) {
    return (
        <div>
          <nav className="navbar fixed-top">
            <ul>
                <li className="navbar-brand nav-item">Clicky Game!</li>  
                <li className="nav-item">Click an image to begin</li>
                <li className="nav-item">Score: {props.score} | TopScore: {props.topScore}</li>
            </ul>
          </nav>

          <header className="jumbotron">
            <h1>Clicky Game!</h1>
            <h2>Click on an image to earn points! Don't click on the same image twice!</h2>
          </header>

        </div>
    );
}

export default Banner;

