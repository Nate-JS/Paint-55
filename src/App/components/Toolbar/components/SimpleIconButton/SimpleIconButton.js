import React from 'react';
import './SimpleIconButton.css';


export default function SimpleIconButton({ icon }) {
    function handleClick() {

    }

    return (
        <div
            className="simpleIconButton"

            id={`simpleIconButton-${icon}`}

            onClick={handleClick}
        >
            <img className="simpleIconButton__icon" src={icon} alt="icon-button" />
        </div>
    )
}
