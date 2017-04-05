import React from 'react';

import Clock from './containers/Clock';
import {Header} from './components/Header';

export const App = () => {
  return (
    <div>
      <Header/>
      <Clock/>
    </div>
  );
};
