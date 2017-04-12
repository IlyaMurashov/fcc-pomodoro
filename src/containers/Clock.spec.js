import React from 'react';
import {shallow} from 'enzyme';

import {Clock} from './Clock';

describe('Clock', () => {
  const props = {
    appState: 'stopped',
    currentTime: {
      minutes: 25,
      seconds: 0
    },
    runTimer: () => {},
    stopTimer: () => {}
  };
  let clockUT;

  beforeEach(() => {
    clockUT = shallow(<Clock {...props}/>);
  });

  it('should render the top div with class "pmdr-clock-wrapper', () => {
    expect(clockUT.first().is('div')).toBe(true);
    expect(clockUT.first().hasClass('pmdr-clock-wrapper')).toBe(true);
  });

});
