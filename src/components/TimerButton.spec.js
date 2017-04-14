import React from 'react';
import {shallow} from 'enzyme';

import {TimerButton} from './TimerButton';

function setup(buttonType) {
  const props = {
    buttonType,
    onClick: jest.fn()
  };

  const enzymeWrapper = shallow(<TimerButton {...props}/>);

  return {
    props,
    enzymeWrapper
  };
}

describe('TimerButton', () => {
  it('should render a button with stop icon', () => {
    const {enzymeWrapper} = setup('stop');

    expect(enzymeWrapper.first().type()).toBe('button');
    expect(enzymeWrapper.first().text()).toBe('X');
  });

  it('should render a button with run icon', () => {
    const {enzymeWrapper} = setup('run');

    expect(enzymeWrapper.first().type()).toBe('button');
    expect(enzymeWrapper.first().text()).toBe('>');
  });

  it('should call onClick cb on click', () => {
    const {enzymeWrapper, props} = setup('run');

    enzymeWrapper.simulate('click');
    expect(props.onClick).toHaveBeenCalledTimes(1);
  });
});
