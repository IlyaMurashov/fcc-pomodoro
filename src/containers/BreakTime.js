import { connect } from 'react-redux';
import * as actions from "../actions/clockActions";
import { TimeAdjGroup } from "../components/TimeAdjGroup";

const BreakTime = connect(
  (state) => ({
    time: state.breakTime,
  }),
  dispatch => ({
    incrementTime: () => dispatch(actions.incrementBreakTime()),
    decrementTime: () => dispatch(actions.decrementBreakTime())
  })
)(TimeAdjGroup);

export default BreakTime;
