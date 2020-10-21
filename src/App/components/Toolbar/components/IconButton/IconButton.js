import React from 'react';
import './IconButton.css';


export default function IconButton({ type, icon, active = false }) {


    function handleClick() {
    }

    return (
        <div
            // Adding extra-classes depending on the props
            className={`iconButton iconButton--${type} ${active ? "iconButton--active" : ""}`}

            id={`iconButton-${icon}`}

            onClick={handleClick}
        >
            <img className="iconButton__icon" src={icon} alt="icon-button" />
        </div>
    )
}
