import React, { useState } from 'react';
import './InputSize.css';

import { useDispatch, useSelector } from 'react-redux';
import setSelectedWidth from '../../../../../actions/setSelectedWidth';

export default function InputSize() {
    const dispatch = useDispatch();
    const deafaultValue = useSelector(state => state.selectedWidth);
    const [value, setValue] = useState(deafaultValue);

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
            max="500"
            step="2"
            onChange={event => updateValue(event.target.value)}
        />
    )
}
