import React, { useState } from 'react';
import './InputColor.css';

export default function InputColor() {
    const [value, setValue] = useState("#30FD15");

    function updateValue(newValue) {
        setValue(newValue);
    }

    return (
        <input
            className="inputColor"
            type="color"
            value={value}
            onChange={(event) => updateValue(event.target.value)}
        />
    )
}
