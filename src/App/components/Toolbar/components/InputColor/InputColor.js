import React, { useState } from 'react';
import './InputColor.css';

import { useDispatch } from 'react-redux';
import setSelectedColor from '../../../../../actions/setSelectedColor';

export default function InputColor() {
    const [value, setValue] = useState("#30FD15");
    const dispatch = useDispatch();

    function updateValue(newValue) {
        setValue(newValue);
        dispatch(setSelectedColor(newValue))
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
