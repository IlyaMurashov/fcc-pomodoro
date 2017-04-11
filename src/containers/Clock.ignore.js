import React from 'react';
import {shallow} from 'enzyme';

import {Clock} from './Clock';

describe('Clock', () => {
  const props = {
    workTime: 25,
    breakTime: 5,
    incrementWorkTime: () => {},
    decrementWorkTime: () => {},
    incrementBreakTime: () => {},
    decrementBreakTime: () => {}
  };
  let clockUT;

  beforeEach(() => {
    clockUT = shallow(<Clock {...props}/>);
  });

  it('should render the top div with class "pmdr-clock-wrapper', () => {
    expect(true).toBe(true);
    expect(clockUT.first().is('div')).toBe(true);
    expect(clockUT.first().hasClass('pmdr-clock-wrapper')).toBe(true);
  });

});
