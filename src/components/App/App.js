import React from "react";
import "./App.css";

import Toolbar from "components/Toolbar/Toolbar";
import Workspace from "components/Workspace/Workspace";

function App() {
  return (
    <div className="app">
      <Toolbar />
      <Workspace />
    </div>
  );
}

export default App;
