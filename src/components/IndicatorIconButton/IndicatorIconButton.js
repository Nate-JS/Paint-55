import React, { useState } from "react";
import "./IndicatorIconButton.css";

import { useDispatch, useSelector } from "react-redux";
import { updateItem, activateItem } from "actions/actions";
import config from "components/App/App.config";

export default function IndicatorIconButton({ id, icon, dropup }) {
  const dispatch = useDispatch();

  // Getting the id of the active item
  const activeItemId = useSelector(state => state.activeItemId);

  const itemSize = useSelector(state => {
    for (let index in state.items) if (state.items[index].id === id) return state.items[index].size;
  });

  const itemFill = useSelector(state => {
    for (let index in state.items) if (state.items[index].id === id) return state.items[index].fill;
  });

  const [checked, setChecked] = useState(itemFill);

  function handleCheckboxClick() {
    setChecked(!checked);
    dispatch(updateItem(activeItemId, itemSize, !checked));
  }

  function handleClick() {
    dispatch(activateItem(id, itemSize, itemFill));
  }

  return (
    <div
      // If the user clicks this button the button will get --selected modificator
      className={`indicatorIconButton   ${activeItemId === id ? "indicatorIconButton--selected" : ""}`}
      id={id}
      onClick={handleClick}
    >
      <img className="indicatorIconButton__icon" src={icon} alt="icon-button" />
      <div className={dropup ? "dropup" : "dropup--disabled"}>
        <label className="dropup__text">Fill</label>
        <input checked={checked} className="dropup__checkbox" onClick={handleCheckboxClick} type="checkbox" />
      </div>
    </div>
  );
}
