import React, { useEffect, useState } from "react";
import "./IndicatorIconButton.css";

import config from "../../../../App.config";

import { useSelector, useDispatch } from "react-redux";
import { setActiveItem, setRectangle } from "../../../../../actions/main";

export default function IndicatorIconButton({ id, icon, dropup }) {
  const dispatch = useDispatch();

  const activeItem = useSelector(state => state.activeItem);

  const [rectFill, setRectFill] = useState(config.default.rectangle.fill);
  const [circleFill, setCircleFill] = useState(config.default.circle.fill);

  const rectWidth = useSelector(state => state.circle.width);
  const rectCircle = useSelector(state => state.activeItem);

  function handleClick() {
    // Selecting this component as a selected item
    dispatch(setActiveItem(id));
  }

  useEffect(() => {
    if (id === "indicatorIconButton-rectangle") {
      setRectFill(!rectFill);

      dispatch(setRectangle(rectWidth, rectFill));
    } else if (id === "indicatorIconButton-circle") {
      setCircleFill(!circleFill);

      dispatch(setRectangle(rectCircle, circleFill));
    }
  }, [activeItem]);

  return (
    <div
      // If the user clicks this button the button will get --selected modificator
      className={`indicatorIconButton   ${activeItem === id ? "indicatorIconButton--selected" : ""}`}
      id={id}
      onClick={handleClick}
    >
      <img className="indicatorIconButton__icon" src={icon} alt="icon-button" />
      <div className={dropup ? "dropup" : "dropup--disabled"}>
        <label className="dropup__text">Fill</label>
        <input className="dropup__checkbox" onClick={handleClick} type="checkbox" />
      </div>
    </div>
  );
}
