import {combineReducers} from 'redux';
import workTime from './workTimeReducer';
import breakTime from './breakTimeReducer';

const rootReducer = combineReducers({
  breakTime,
  workTime
});

export default rootReducer;
