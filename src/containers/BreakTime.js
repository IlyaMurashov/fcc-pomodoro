import { connect } from 'react-redux';
import * as actions from "../actions/clockActions";
import { TimeAdjGroup } from "../components/TimeAdjGroup";

const BreakTime = connect(
  (state) => ({
    title: 'break time',
    appState: state.appState,
    time: state.breakTime,
  }),
  dispatch => ({
    incrementTime: () => dispatch(actions.incrementBreakTime()),
    decrementTime: () => dispatch(actions.decrementBreakTime())
  })
)(TimeAdjGroup);

BreakTime.displayName = 'BreakTime';

export default BreakTime;
