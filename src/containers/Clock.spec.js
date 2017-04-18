import React from 'react';
import { shallow } from 'enzyme';

import { Clock } from './Clock';

function setup(appState) {
  const props = {
    appState,
    currentTime: {
      minutes: 25,
      seconds: 0
    },
    runTimer: () => {/*runTimer*/},
    stopTimer: () => {/*stopTimer*/}
  };

  const enzymeWrapper = shallow(<Clock {...props}/>);

  return {
    props,
    enzymeWrapper
  };
}

describe('Clock', () => {

  it('should render the top div with class "pmdr-clock-wrapper', () => {
    const { enzymeWrapper } = setup('stopped');
    expect(enzymeWrapper.first().is('div')).toBe(true);
    expect(enzymeWrapper.first().hasClass('pmdr-clock-wrapper')).toBe(true);
  });

  describe('when appState is "stopped" should render the following children with props', () => {
    let enzymeWrapper;
    let props;
    beforeEach(() => {
      enzymeWrapper = setup('stopped').enzymeWrapper;
      props = setup('stopped').props;
    });

    it('WorkTime', () => {
      const workTime = enzymeWrapper.find('WorkTime');
      expect(workTime.props()).toEqual({});
    });

    it('BreakTime', () => {
      const breakTime = enzymeWrapper.find('BreakTime');
      expect(breakTime.props()).toEqual({});
    });

    it('TimeDisplay', () => {
      const display = enzymeWrapper.find('TimeDisplay');
      expect(display.length).toBe(1);
      expect(display.props().currentTime).toEqual(props.currentTime);
    });

    it('run TimerButton', () => {
      const timerButtons = enzymeWrapper.find('TimerButton');
      expect(timerButtons.length).toBe(1);
      expect(timerButtons.at(0).props().buttonType).toBe('run');
      expect(timerButtons.at(0).props().onClick.toString()).toEqual(props.runTimer.toString());
    });

    it('total: 4 rendered children', () => {
      expect(enzymeWrapper.children().length).toBe(4);
    });
  });

  describe('when appState is "work" should render the following children with props', () => {
    let enzymeWrapper;
    let props;
    beforeEach(() => {
      enzymeWrapper = setup('work').enzymeWrapper;
      props = setup('work').props;
    });

    it('TimeDisplay', () => {
      const display = enzymeWrapper.find('TimeDisplay');
      expect(display.length).toBe(1);
      expect(display.props().currentTime).toEqual(props.currentTime);
    });

    it('stop TimerButton', () => {
      const timerButtons = enzymeWrapper.find('TimerButton');
      expect(timerButtons.length).toBe(1);
      expect(timerButtons.at(0).props().buttonType).toBe('stop');
      expect(timerButtons.at(0).props().onClick.toString()).toBe(props.stopTimer.toString());
    });

    it('total: 2 rendered children', () => {
      expect(enzymeWrapper.children().length).toBe(2);
    });
  });

  describe('when appState is "break" should render the following children with props', () => {
    let enzymeWrapper;
    let props;
    beforeEach(() => {
      enzymeWrapper = setup('break').enzymeWrapper;
      props = setup('break').props;
    });

    it('TimeDisplay', () => {
      const display = enzymeWrapper.find('TimeDisplay');
      expect(display.length).toBe(1);
      expect(display.props().currentTime).toEqual(props.currentTime);
    });

    it('stop TimerButton', () => {
      const timerButtons = enzymeWrapper.find('TimerButton');
      expect(timerButtons.length).toBe(1);
      expect(timerButtons.at(0).props().buttonType).toBe('stop');
      expect(timerButtons.at(0).props().onClick.toString()).toBe(props.stopTimer.toString());
    });

    it('total: 2 rendered children', () => {
      expect(enzymeWrapper.children().length).toBe(2);
    });
  });
});
