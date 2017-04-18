import { connect } from 'react-redux';
import * as actions from "../actions/clockActions";
import { TimeAdjGroup } from "../components/TimeAdjGroup";

const WorkTime = connect(
  (state) => ({
    time: state.workTime,
  }),
  dispatch => ({
    incrementTime: () => dispatch(actions.incrementWorkTime()),
    decrementTime: () => dispatch(actions.decrementWorkTime())
  })
)(TimeAdjGroup);

WorkTime.displayName = 'WorkTime';

export default WorkTime;
