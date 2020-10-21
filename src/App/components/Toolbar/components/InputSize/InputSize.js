import React, { useState } from 'react';
import './InputSize.css';

export default function InputSize() {
    const [value, setValue] = useState(4);

    function updateValue(newValue) {
        setValue(newValue);
    }

    return (
        <input
            className="inputSize"
            type="number"
            value={value}
            min="1"
            max="300"
            step="2"
            onChange={event => updateValue(event.target.value)}
        />
    )
}
