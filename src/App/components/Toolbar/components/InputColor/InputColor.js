import React, { useState } from "react";
import "./InputColor.css";

import { useDispatch, useSelector } from "react-redux";
import { setActiveColor } from "../../../../../actions/main";

export default function InputColor() {
  const dispatch = useDispatch();

  const deafaultValue = useSelector(state => state.activeColor);
  const [value, setValue] = useState(deafaultValue);

  function updateValue(newValue) {
    setValue(newValue);
    dispatch(setActiveColor(newValue));
  }

  return (
    <input className="inputColor" type="color" value={value} onChange={event => updateValue(event.target.value)} />
  );
}
