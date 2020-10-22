import React, { useState } from 'react';
import './InputSize.css';

import { useDispatch } from 'react-redux';
import setSelectedWidth from '../../../../../actions/setSelectedWidth';

export default function InputSize() {
    const dispatch = useDispatch();
    const [value, setValue] = useState(4);

    function updateValue(newValue) {
        setValue(newValue);
        dispatch(setSelectedWidth(newValue));
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
