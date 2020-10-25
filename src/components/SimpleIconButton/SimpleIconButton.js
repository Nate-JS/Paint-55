import React from "react";
import "./SimpleIconButton.css";

export default function SimpleIconButton({ id, icon, disabled = false, onClick }) {
  function handleClick() {}

  return (
    <div className={`simpleIconButton ${disabled && "simpleIconButton--disabled"} `} id={id} onClick={onClick}>
      <img className="simpleIconButton__icon" src={icon} alt="icon-button" />
    </div>
  );
}
