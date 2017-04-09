import React from 'react';

// eslint-disable-next-line import/no-named-as-default
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
