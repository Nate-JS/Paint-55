import React, { useState } from 'react';
import './IndicatorIconButton.css';


export default function IndicatorIconButton({ icon }) {
    const [selected, setSelected] = useState(true);

    function handleClick() {

    }

    return (
        <div
            className={`indicatorIconButton   ${selected && "indicatorIconButton--selected"}`}

            id={`indicatorIconButton-${icon}`}

            onClick={handleClick}
        >
            <img className="indicatorIconButton__icon" src={icon} alt="icon-button" />
        </div>
    )
}
