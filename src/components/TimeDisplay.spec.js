import React from 'react';
import { shallow } from 'enzyme';

import { TimeDisplay } from './TimeDisplay';

const renderWithTime = (minutes, seconds) => {
  return shallow(<TimeDisplay currentTime={{minutes, seconds}}/>);
};

describe('TimeDisplay', () => {
  it('should render one h1', () => {
    const displayUT = renderWithTime(1, 1);
    expect(displayUT.first().is('h1')).toBe(true);
  });

  it('should format [1, 0] to 1:00', () => {
    const displayUT = renderWithTime(1, 0);
    expect(displayUT.first().text()).toBe('1:00');
  });

  it('should format [1, 5] to 1:05', () => {
    const displayUT = renderWithTime(1, 5);
    expect(displayUT.first().text()).toBe('1:05');
  });

  it('should format [1, 59] to 1:59', () => {
    const displayUT = renderWithTime(1, 59);
    expect(displayUT.first().text()).toBe('1:59');
  });

  it('should format [25, 5] to 25:05', () => {
    const displayUT = renderWithTime(25, 5);
    expect(displayUT.first().text()).toBe('25:05');
  });
});
