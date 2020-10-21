import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';

import Toolbar from './components/Toolbar/Toolbar';
import Workspace from './components/Workspace/Workspace';



function App() {
  const count = useSelector(state => state.counter);

  return (
    <div className="app">
      <Toolbar />
      <Workspace />
      <h2>Count = {count}</h2>
    </div>
  );
}

export default App;
