import React from 'react';
import './IndicatorIconButton.css';

import { useSelector, useDispatch } from 'react-redux';
import setSelectedItem from '../../../../../actions/setSelectedItem';


export default function IndicatorIconButton({ id, icon }) {
    const dispatch = useDispatch();
    const selectedItemId = useSelector(state => state.selectedItem)


    function handleClick() {
        // Putting this component's id in the storage
        dispatch(setSelectedItem(id))

    }

    return (
        <div
            className={`indicatorIconButton   ${selectedItemId === id ? "indicatorIconButton--selected" : ""}`}
            id={id}
            onClick={handleClick}
        >
            <img className="indicatorIconButton__icon" src={icon} alt="icon-button" />
        </div>
    )
}
