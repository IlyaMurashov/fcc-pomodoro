import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/clockActions';
import { TimeDisplay } from '../components/TimeDisplay';
import { TimerButton } from '../components/TimerButton';
import WorkTime from "./WorkTime";
import BreakTime from "./BreakTime";

export class Clock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="pmdr-clock-wrapper">
        <WorkTime />
        <BreakTime />
        <TimeDisplay currentTime={this.props.currentTime}/>
        <TimerButton buttonType={'stop'} onClick={this.props.stopTimer}/>
        <TimerButton buttonType={'run'} onClick={this.props.runTimer}/>
      </div>
    );
  }
}

Clock.propTypes = {
  appState: React.PropTypes.string.isRequired,
  currentTime: React.PropTypes.object.isRequired,
  runTimer: React.PropTypes.func.isRequired,
  stopTimer: React.PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    appState: state.appState,
    currentTime: state.currentTime
  };
}

function mapDispatchToProps(dispatch) {
  return {
    runTimer: () => dispatch(actions.runTimer()),
    stopTimer: () => dispatch(actions.stopTimer())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Clock);
