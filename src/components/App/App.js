import React, { useState } from "react";
import "./App.css";

import Toolbar from "components/Toolbar/Toolbar";
import Workspace from "components/Workspace/Workspace";
import Modal from "components/Modal/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [saveData, setSaveData] = useState([false, false]);

  function saveCanvas(name, format) {
    console.log(name, format);

    const a = document.createElement("a");
    a.id = "downloadLink";
    a.download = name;
    document.body.appendChild(a);

    const download = document.getElementById("downloadLink");

    var image = document
      .getElementById("canvas")
      .toDataURL(`image/${format}`)
      .replace(`image/${format}`, "image/octet-stream");

    a.setAttribute("href", image);
    a.click();
  }

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  function cleanCanvas() {
    const canvas = document.getElementById("canvas");
    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
  }

  return (
    <div className="app">
      <Toolbar callBackOpenModal={openModal} callBackCleanCanvas={cleanCanvas} />
      <Workspace />
      <Modal show={showModal} callBackSave={saveCanvas} callBackClose={closeModal} />
    </div>
  );
}

export default App;
