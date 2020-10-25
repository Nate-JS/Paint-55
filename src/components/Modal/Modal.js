import React, { useState } from "react";
import "./Modal.css";

// This is a specific modal
export default function Modal({ show, callBackSave, callBackClose }) {
  const [imgName, setImgName] = useState(false);
  const [imgFormat, setImgFormat] = useState("png");

  function returnData() {
    if (imgName && imgFormat) {
      console.log(imgFormat);
      callBackSave(imgName, imgFormat);
      callBackClose();
    }
  }

  return (
    <div className={`modal ${show && "modal--show"}`}>
      <div className="modal__header">
        <h2 className="modal__title">Save</h2>
      </div>

      <div className="modal__body">
        <div className="group">
          <input
            required
            className="modal__input"
            id="imgName"
            type="text"
            placeholder="Name"
            onInput={event => setImgName(event.target.value)}
          />

          <select className="modal__select" id="imgFormat" onClick={event => setImgFormat(event.target.value)}>
            <option className="select__item" value="png">
              PNG
            </option>
            <option className="select__item" value="jpeg">
              jpeg
            </option>
          </select>
        </div>

        <div className="group">
          <button type="submit" className="modal__btn modal__btn--secondary" onClick={callBackClose}>
            Cancel
          </button>
          <button type="submit" className="modal__btn modal__btn--primary" onClick={returnData} onClick={returnData}>
            Ok
          </button>
        </div>
      </div>
    </div>
  );
}
