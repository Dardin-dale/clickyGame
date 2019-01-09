import React from 'react';
import "./style.css";

function Clickable (props) {
    
    return (
        <div className="card">
            <a className="img-container" onClick={() => props.test(props.name)}>
                <img alt={props.name} src={props.image} />
            </a>
        </div>
    );

}

export default Clickable;