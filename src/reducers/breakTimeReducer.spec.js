import * as types from '../actions/actionTypes';
import breakTimeReducer from './breakTimeReducer';

describe('breakTimeReducer', () => {
  it('should increment on INCREMENT_BREAK_TIME action', () => {
    const state = 5;
    const newState = breakTimeReducer(state, { type: types.INCREMENT_BREAK_TIME });

    expect(state + 1).toEqual(newState);
  });

  it('should decrement on DECREMENT_BREAK_TIME action', () => {
    const state = 5;
    const newState = breakTimeReducer(state, { type: types.DECREMENT_BREAK_TIME });

    expect(state - 1).toEqual(newState);
  });

  it('should not let the value go below 1', () => {
    const state = 1;
    const newState = breakTimeReducer(state, { type: types.DECREMENT_BREAK_TIME });

    expect(state).toEqual(newState);
  });

  it('should not let the value go above 25', () => {
    const state = 25;
    const newState = breakTimeReducer(state, { type: types.INCREMENT_BREAK_TIME });

    expect(state).toEqual(newState);
  });

  it('should return state on unspecified action', () => {
    const state = 5;
    const newState = breakTimeReducer(state, { type: 'UNKNOWN' });

    expect(newState).toEqual(state);
  });
});
