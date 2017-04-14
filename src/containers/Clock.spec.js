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

  describe('should render all children with props', () => {
    it('WorkTime', () => {
      const workTime = clockUT.children().first();
      expect(workTime.props()).toEqual({});
    });

    it('BreakTime', () => {
      const breakTime = clockUT.childAt(1);
      expect(breakTime.props()).toEqual({});
    });

    it('TimeDisplay', () => {
      const display = clockUT.find('TimeDisplay');
      expect(display.length).toBe(1);
      expect(display.props().currentTime).toEqual(props.currentTime);
    });

    it('run and stop TimerButton', () => {
      const timerButtons = clockUT.find('TimerButton');
      expect(timerButtons.length).toBe(2);
      expect(timerButtons.at(0).props().buttonType).toBe('stop');
      expect(timerButtons.at(1).props().buttonType).toBe('run');
      expect(timerButtons.at(0).props().onClick).toBe(props.stopTimer);
      expect(timerButtons.at(1).props().onClick).toBe(props.runTimer);
    });
  });
});
