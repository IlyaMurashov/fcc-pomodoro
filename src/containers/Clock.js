import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/clockActions';

class Clock extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="pmdr-clock-wrapper">
        <h1>{this.props.workTime}</h1>
        <div
          onClick={() => {
            this.props.incrementWorkTime();
          }}
        >
          +
        </div>
        <div
          onClick={() => {
            this.props.decrementWorkTime();
          }}
        >
          -
        </div>
      </div>
    );
  }
}

Clock.propTypes = {
  workTime: React.PropTypes.number.isRequired,
  incrementWorkTime: React.PropTypes.func.isRequired,
  decrementWorkTime: React.PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    workTime: state.workTime
  };
}

function mapDispatchToProps(dispatch) {
  return {
    incrementWorkTime: () => dispatch(actions.incrementWorkTime()),
    decrementWorkTime: () => dispatch(actions.decrementWorkTime())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Clock);
