import React from "react";
import {render} from "react-dom";
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';

import {App} from "./App";
import {subscribeTickerTo} from './utils/ticker';

require('./resources/notification.mp3');

const store = configureStore();
subscribeTickerTo(store);

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);
