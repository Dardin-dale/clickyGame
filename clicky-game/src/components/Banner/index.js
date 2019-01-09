import React from 'react';
import "./style.css";

function Banner (props) {
    return (
        <ul>
          <li>Clicky Game!</li>  
          <li>Score: {props.score} | </li>
          <li>TopScore: {props.topScore}</li>
        </ul>
    );
}

export default Banner;

