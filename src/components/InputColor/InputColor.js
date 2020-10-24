import React, { useState } from "react";
import "./InputColor.css";

import { useDispatch } from "react-redux";
import { activateColor } from "actions/actions";
import config from "components/App/App.config";

export default function InputColor() {
  const dispatch = useDispatch();
  const [value, setValue] = useState(config.activeColor);

  function updateValue(newValue) {
    setValue(newValue);
    dispatch(activateColor(newValue));
  }

  return (
    <input className="inputColor" type="color" value={value} onChange={event => updateValue(event.target.value)} />
  );
}
