import React from 'react';
import { shallow } from 'enzyme';
import { TimeAdjGroup } from './TimeAdjGroup';

function setup() {
  const props = {
    time: 5,
    title: "A title",
    incrementTime: jest.fn(),
    decrementTime: jest.fn()
  };

  const enzymeWrapper = shallow(<TimeAdjGroup {...props}/>);

  return {
    props,
    enzymeWrapper
  };
}

describe('TimeAdjGroup', () => {
  it('should render self and subcomponents', () => {
    const { enzymeWrapper, props } = setup();

    expect(enzymeWrapper.first().type()).toBe('div');

    expect(enzymeWrapper.childAt(0).type()).toBe('p');
    expect(enzymeWrapper.childAt(0).text()).toBe(props.title);

    expect(enzymeWrapper.childAt(1).type()).toBe('span');
    expect(enzymeWrapper.childAt(1).text()).toBe('-');

    expect(enzymeWrapper.childAt(2).type()).toBe('div');
    expect(enzymeWrapper.childAt(2).text()).toBe(props.time.toString());

    expect(enzymeWrapper.childAt(3).type()).toBe('span');
    expect(enzymeWrapper.childAt(3).text()).toBe('+');
  });

  it('on click + should call incrementTime cb', () => {
    const { enzymeWrapper, props } = setup();

    enzymeWrapper.find('.pmdr-time-adjust__control--plus').simulate('click');
    expect(props.incrementTime).toHaveBeenCalledTimes(1);
  });

  it('on click - should call decrementTime cb', () => {
    const { enzymeWrapper, props } = setup();

    enzymeWrapper.find('.pmdr-time-adjust__control--minus').simulate('click');
    expect(props.decrementTime).toHaveBeenCalledTimes(1);
  });
});
