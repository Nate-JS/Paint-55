import React, { useState } from "react";
import "./App.css";

import Toolbar from "components/Toolbar/Toolbar";
import Workspace from "components/Workspace/Workspace";
import Modal from "components/Modal/Modal";

function App() {
  const [showModal, setShowModal] = useState(true);

  function saveCanvas(name, format) {
    console.log(name, format);
  }

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  return (
    <div className="app">
      <Toolbar />
      <Workspace />
      <Modal show={showModal} callBack={saveCanvas} />
    </div>
  );
}

export default App;
