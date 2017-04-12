import * as types from '../actions/actionTypes';
import timeReducer from './timerReducer';

describe('timeReducer', () => {
  it('should not go below 00:00', () => {
    const state = { minutes: 0, seconds: 0 };
    const newState = timeReducer(state, { type: types.TICK });

    expect(newState).toEqual(state);
  });

  it('should decrement a second on TICK if seconds != 0', () => {
    const state = { minutes: 1, seconds: 1 };
    const newState = timeReducer(state, { type: types.TICK });

    expect(newState).toEqual({ minutes: 1, seconds: 0 });
  });

  it('should decrement a minute and set seconds to 59 on TICK if seconds == 0', () => {
    const state = { minutes: 1, seconds: 0 };
    const newState = timeReducer(state, { type: types.TICK });

    expect(newState).toEqual({ minutes: 0, seconds: 59 });
  });

  it('should return state on unspecified action', () => {
    const state = { minutes: 1, seconds: 0 };
    const newState = timeReducer(state, { type: 'UNKNOWN' });

    expect(newState).toEqual(state);
  });
});

