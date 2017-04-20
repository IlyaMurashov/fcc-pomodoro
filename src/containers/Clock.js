import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/clockActions';
import { TimeDisplay } from '../components/TimeDisplay';
import WorkTime from "./WorkTime";
import BreakTime from "./BreakTime";

export class Clock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="pmdr-clock-wrapper">
        {this.props.appState === 'stopped' && <WorkTime/>}
        {this.props.appState === 'stopped' && <BreakTime/>}
        <TimeDisplay appState={this.props.appState}
                     currentTime={this.props.currentTime}
                     onClick={this.props.appState === 'stopped' ? this.props.runTimer : this.props.stopTimer}/>
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
