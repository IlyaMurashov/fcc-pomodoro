import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/clockActions';
import {TimeAdjGroup} from '../components/TimeAdjGroup';
import {TimeDisplay} from '../components/TimeDisplay';
import {TimerButton} from '../components/TimerButton';

export class Clock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="pmdr-clock-wrapper">
        <TimeAdjGroup time={this.props.workTime}
                      incrementTime={this.props.incrementWorkTime}
                      decrementTime={this.props.decrementWorkTime}/>
        <TimeAdjGroup time={this.props.breakTime}
                      incrementTime={this.props.incrementBreakTime}
                      decrementTime={this.props.decrementBreakTime}/>
        <TimeDisplay currentTime={this.props.currentTime}
                     appState={this.props.appState}/>
        <TimerButton buttonType={'stop'} onClick={this.props.stopTimer}/>
        <TimerButton buttonType={'run'} onClick={this.props.runTimer}/>
      </div>
    );
  }
}

Clock.propTypes = {
  workTime: React.PropTypes.number.isRequired,
  breakTime: React.PropTypes.number.isRequired,
  incrementWorkTime: React.PropTypes.func.isRequired,
  decrementWorkTime: React.PropTypes.func.isRequired,
  incrementBreakTime: React.PropTypes.func.isRequired,
  decrementBreakTime: React.PropTypes.func.isRequired,
  appState: React.PropTypes.string.isRequired,
  currentTime: React.PropTypes.object.isRequired,
  runTimer: React.PropTypes.func.isRequired,
  stopTimer: React.PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    workTime: state.workTime,
    breakTime: state.breakTime,
    appState: state.appState,
    currentTime: state.currentTime
  };
}

function mapDispatchToProps(dispatch) {
  return {
    incrementWorkTime: () => dispatch(actions.incrementWorkTime()),
    decrementWorkTime: () => dispatch(actions.decrementWorkTime()),
    incrementBreakTime: () => dispatch(actions.incrementBreakTime()),
    decrementBreakTime: () => dispatch(actions.decrementBreakTime()),
    runTimer: () => dispatch(actions.runTimer()),
    stopTimer: () => dispatch(actions.stopTimer())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Clock);
