import React from "react";
import {render} from "react-dom";
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';

import {App} from "./App";

const store = configureStore();

let interval = null;
store.subscribe(() => {
  if (store.getState().appState !== 'stopped' && interval === null) {
    interval = setInterval(() => {
      store.dispatch({
        type: 'TICK'
      });
    }, 1000);
  }
  if (store.getState().appState === 'stopped' && interval !== null) {
    clearInterval(interval);
    interval = null;
  }
});

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);
