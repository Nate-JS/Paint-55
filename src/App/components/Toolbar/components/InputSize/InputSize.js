import React, { useState, useEffect } from "react";
import "./InputSize.css";

import { useDispatch, useSelector } from "react-redux";
import {
  setActiveColor,
  setPencil,
  setBrush,
  setEraser,
  setLine,
  setRectangle,
  setCircle,
} from "../../../../../actions/main";
import config from "../../../../App.config";

export default function InputSize() {
  const dispatch = useDispatch();

  const activeItem = useSelector(state => state.activeItem);

  const deafaultValueP = useSelector(state => state.pencil.width);
  const deafaultValueB = useSelector(state => state.brush.width);
  const deafaultValueE = useSelector(state => state.eraser.width);
  const deafaultValueL = useSelector(state => state.line.width);
  const deafaultValueR = useSelector(state => state.rectangle.width);
  const deafaultValueC = useSelector(state => state.circle.width);

  const [value, setValue] = useState(0);

  useEffect(() => {
    switch (activeItem) {
      case "indicatorIconButton-pencil":
        setValue(deafaultValueP);
        break;

      case "indicatorIconButton-brush":
        setValue(deafaultValueB);
        break;

      case "indicatorIconButton-eraser":
        setValue(deafaultValueE);
        break;

      case "indicatorIconButton-line":
        setValue(deafaultValueL);
        break;

      case "indicatorIconButton-rectangle":
        setValue(deafaultValueR);
        break;

      case "indicatorIconButton-circle":
        setValue(deafaultValueC);
        break;
    }
  }, [activeItem]);

  function updateValue(newValue) {
    setValue(newValue);
    switch (activeItem) {
      case "indicatorIconButton-pencil":
        dispatch(setPencil(value));
        break;

      case "indicatorIconButton-brush":
        dispatch(setBrush(value));
        break;

      case "indicatorIconButton-eraser":
        dispatch(setEraser(value));
        break;

      case "indicatorIconButton-line":
        dispatch(setLine(value));
        break;

      case "indicatorIconButton-rectangle":
        dispatch(setRectangle(value, true));
        break;

      case "indicatorIconButton-circle":
        dispatch(setCircle(value, true));
        break;
    }
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
  );
}
