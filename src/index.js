import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import selectedItem from './redusers/app';

const store = createStore(selectedItem, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// store.dispatch({ type: 'SET_NEW_ITEM', newItem: "SHIT" });


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);