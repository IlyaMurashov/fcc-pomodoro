import React from "react";
import {render} from "react-dom";
import {Provider} from 'react-redux';

import configureStore from './store/configureStore';
import {App} from "./App";
import {subscribeTickerTo} from './utils/ticker';
import './stylesheets/main.scss';

require('./resources/notification.mp3');

const store = configureStore();
subscribeTickerTo(store);

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);
