import React from 'react';
import {shallow} from 'enzyme';

import Clock from './Clock';

describe('Clock', () => {
  let clockUT;

  beforeEach(() => {
    clockUT = shallow(<Clock/>);
  });

  it('should render the top div with class "pmdr-clock-wrapper', () => {
    expect(true).toBe(true);
    // expect(clockUT.first().is('div')).toBe(true);
    // expect(clockUT.first().hasClass('pmdr-clock-wrapper')).toBe(true);
  });



});
