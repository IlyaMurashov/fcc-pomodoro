import React from 'react';
import { shallow } from 'enzyme';

import { TimeDisplay } from './TimeDisplay';

function setup(appState = 'stopped', minutes = 1, seconds = 0) {
  const props = {
    appState,
    currentTime: {
      minutes,
      seconds
    },
    onClick: jest.fn()
  };

  const enzymeWrapper = shallow(<TimeDisplay {...props}/>);

  return {
    props,
    enzymeWrapper
  };
}

describe('TimeDisplay', () => {

  it('should call the passed cb onClick', () => {
    const { enzymeWrapper, props } = setup();
    enzymeWrapper.simulate('click');

    expect(props.onClick).toHaveBeenCalledTimes(1);
  });

  it('should format [1, 0] to 1:00', () => {
    const { enzymeWrapper } = setup('work', 1, 0);
    expect(enzymeWrapper.first().text()).toBe('1:00');
  });

  it('should format [1, 5] to 1:05', () => {
    const { enzymeWrapper } = setup('work', 1, 5);
    expect(enzymeWrapper.first().text()).toBe('1:05');
  });

  it('should format [1, 59] to 1:59', () => {
    const { enzymeWrapper } = setup('work', 1, 59);
    expect(enzymeWrapper.first().text()).toBe('1:59');
  });

  it('should format [25, 5] to 25:05', () => {
    const { enzymeWrapper } = setup('work', 25, 5);
    expect(enzymeWrapper.first().text()).toBe('25:05');
  });

  describe('when appState is stopped', () => {
    it('should render one top div', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper.first().is('div')).toBe(true);
    });

    it('should render one child p with text "Start!"', () => {
      const { enzymeWrapper } = setup();
      const children = enzymeWrapper.children;
      const pChild = enzymeWrapper.find('p');

      expect(children.length).toBe(1);
      expect(pChild.is('p')).toBe(true);
      expect(pChild.text()).toBe("Start!");
    });
  });

  describe('when appState is work', () => {
    it('should render one top div with modifiers .-full and .-work', () => {
      const { enzymeWrapper } = setup('work');
      expect(enzymeWrapper.first().is('div')).toBe(true);
      expect(enzymeWrapper.first().hasClass('-full')).toBe(true);
      expect(enzymeWrapper.first().hasClass('-work')).toBe(true);
    });

    it('should render one child p with formatted time and .-full modifier', () => {
      const { enzymeWrapper } = setup('work');
      const children = enzymeWrapper.children;
      const pChild = enzymeWrapper.find('p');

      expect(children.length).toBe(1);
      expect(pChild.is('p')).toBe(true);
      expect(pChild.hasClass('-full')).toBe(true);
      expect(pChild.text()).toBe("1:00");
    });
  });

  describe('when appState is break', () => {
    it('should render one top div with modifiers .-full and .-break', () => {
      const { enzymeWrapper } = setup('break');
      expect(enzymeWrapper.first().is('div')).toBe(true);
      expect(enzymeWrapper.first().hasClass('-full')).toBe(true);
      expect(enzymeWrapper.first().hasClass('-break')).toBe(true);
    });

    it('should render one child p with formatted time and .-full modifier', () => {
      const { enzymeWrapper } = setup('break');
      const children = enzymeWrapper.children;
      const pChild = enzymeWrapper.find('p');

      expect(children.length).toBe(1);
      expect(pChild.is('p')).toBe(true);
      expect(pChild.hasClass('-full')).toBe(true);
      expect(pChild.text()).toBe("1:00");
    });
  });
});
