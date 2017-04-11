import * as types from '../actions/actionTypes';
import breakTimeReducer from './breakTimeReducer';
import workTimeReducer from './workTimeReducer';
import timeReducer from './timerReducer';

const initialState = {
  workTime: 25,
  breakTime: 5,
  appState: 'stopped',
  currentTime: {
    minutes: 25,
    seconds: 0
  }
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case types.INCREMENT_WORK_TIME:
    case types.DECREMENT_WORK_TIME:
      if (state.appState === 'stopped')
        return {
          ...state,
          workTime: workTimeReducer(state.workTime, action)
        };
      else
        return state;

    case types.INCREMENT_BREAK_TIME:
    case types.DECREMENT_BREAK_TIME:
      if (state.appState === 'stopped')
        return {
          ...state,
          breakTime: breakTimeReducer(state.breakTime, action)
        };
      else
        return state;

    case types.RUN:
      if (state.appState === 'stopped')
        return {
          ...state,
          appState: 'work',
          currentTime: {
            minutes: state.workTime,
            seconds: 0
          }
        };
      else
        return state;

    case types.STOP:
      if (state.appState === 'work' || state.appState === 'break')
        return {
          ...state,
          appState: 'stopped'
        };
      else
        return state;

    case types.TICK:
      if (state.appState === 'work' || state.appState === 'break') {
        return {
          ...state,
          currentTime: timeReducer(state.currentTime, action)
        };
      }
      else
        return state;

    default:
      return state;
  }
}
