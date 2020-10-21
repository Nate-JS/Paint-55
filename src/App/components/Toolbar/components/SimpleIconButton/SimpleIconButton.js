import React from 'react';
import './SimpleIconButton.css';


export default function SimpleIconButton({ id, icon }) {
    function handleClick() {

    }

    return (
        <div
            className="simpleIconButton"

            id={id}

            onClick={handleClick}
        >
            <img className="simpleIconButton__icon" src={icon} alt="icon-button" />
        </div>
    )
}
