import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import setSelectedItem from '../../../../../actions/setSelectedItem';
import './IndicatorIconButton.css';


export default function IndicatorIconButton({ id, icon }) {
    const selectedItemId = useSelector(state => state.selectedItem)
    const dispatch = useDispatch();

    function handleClick() {
        dispatch(setSelectedItem(id))
    }

    return (
        <div
            className={`indicatorIconButton   ${selectedItemId === id && "indicatorIconButton--selected"}`}

            id={id}

            onClick={handleClick}
        >
            <img className="indicatorIconButton__icon" src={icon} alt="icon-button" />
        </div>
    )
}
