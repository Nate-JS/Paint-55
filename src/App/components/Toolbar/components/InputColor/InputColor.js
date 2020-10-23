import React, { useState } from 'react';
import './InputColor.css';

import { useDispatch, useSelector } from 'react-redux';
import setSelectedColor from '../../../../../actions/setSelectedColor';

export default function InputColor() {
    const dispatch = useDispatch();
    const deafaultValue = useSelector(state => state.selectedColor);
    const [value, setValue] = useState(deafaultValue);

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
