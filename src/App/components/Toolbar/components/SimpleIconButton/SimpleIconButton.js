import React from 'react';
import './SimpleIconButton.css';


export default function SimpleIconButton({ id, icon, disabled = false }) {
    function handleClick() {

    }

    return (
        <div
            className={`simpleIconButton ${disabled && "simpleIconButton--disabled"} `}

            id={id}

            onClick={handleClick}
        >
            <img className="simpleIconButton__icon" src={icon} alt="icon-button" />
        </div>
    )
}
