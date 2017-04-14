import React from 'react';
import { shallow } from 'enzyme';
import { TimeAdjGroup } from './TimeAdjGroup';

function setup() {
  const props = {
    time: 5,
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

    expect(enzymeWrapper.childAt(0).type()).toBe('h1');
    expect(enzymeWrapper.childAt(0).text()).toBe(props.time.toString());

    expect(enzymeWrapper.childAt(1).type()).toBe('button');
    expect(enzymeWrapper.childAt(1).text()).toBe('+');

    expect(enzymeWrapper.childAt(2).type()).toBe('button');
    expect(enzymeWrapper.childAt(2).text()).toBe('-');
  });

  it('on click + should call incrementTime cb', () => {
    const { enzymeWrapper, props } = setup();

    enzymeWrapper.childAt(1).simulate('click');
    expect(props.incrementTime).toHaveBeenCalledTimes(1);

  });

  it('on click - should call decrementTime cb', () => {
    const { enzymeWrapper, props } = setup();

    enzymeWrapper.childAt(2).simulate('click');
    expect(props.decrementTime).toHaveBeenCalledTimes(1);

  });
});
