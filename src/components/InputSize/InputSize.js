import React, { useEffect, useState } from "react";
import "./InputSize.css";

import { useDispatch, useSelector } from "react-redux";
import config from "components/App/App.config";
import { updateItem } from "actions/actions";

export default function InputSize() {
  const dispatch = useDispatch();
  const [value, setValue] = useState(config.items[config.defaultItemName].size);

  const activeItemId = useSelector(state => state.activeItemId);

  const itemSize = useSelector(state => {
    for (let index in state.items) if (state.items[index].id === activeItemId) return state.items[index].size;
  });

  const itemFill = useSelector(state => {
    for (let index in state.items) if (state.items[index].id === activeItemId) return state.items[index].fill;
  });

  function updateValue(newValue) {
    setValue(newValue);
    dispatch(updateItem(activeItemId, newValue, itemFill));
  }

  useEffect(() => {
    setValue(itemSize);
  }, [activeItemId, itemFill, itemSize]);

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
