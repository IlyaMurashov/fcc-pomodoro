import * as types from '../actions/actionTypes';
import workTimeReducer from './workTimeReducer';

describe('workTimeReducer', () => {
  it('should increment on INCREMENT_WORK_TIME action', () => {
    const state = 5;
    const newState = workTimeReducer(state, { type: types.INCREMENT_WORK_TIME });

    expect(state + 1).toEqual(newState);

  });

  it('should decrement on DECREMENT_WORK_TIME action', () => {
    const state = 5;
    const newState = workTimeReducer(state, { type: types.DECREMENT_WORK_TIME });

    expect(state - 1).toEqual(newState);

  });

  it('should not let the value go below 1', () => {
    const state = 1;
    const newState = workTimeReducer(state, { type: types.DECREMENT_WORK_TIME });

    expect(state).toEqual(newState);
  });

  it('should not let the value go above 99', () => {
    const state = 99;
    const newState = workTimeReducer(state, { type: types.INCREMENT_WORK_TIME });

    expect(state).toEqual(newState);
  });

  it('should return state on unspecified action', () => {
    const state = 5;
    const newState = workTimeReducer(state, { type: 'UNKNOWN' });

    expect(newState).toEqual(state);
  });
});
