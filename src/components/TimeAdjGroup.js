import React from 'react';

export const TimeAdjGroup = (props) => {
  return (
    <div className="pmdr-time-adjust">
      <span className="pmdr-time-adjust__control--minus"
        onClick={() => {
          props.decrementTime();
        }}
      >
        -
      </span>
      <div className="pmdr-time-adjust__display">{props.time}</div>
      <span className="pmdr-time-adjust__control--plus"
        onClick={() => {
          props.incrementTime();
        }}
      >
        +
      </span>
    </div>
  );
};

TimeAdjGroup.propTypes = {
  time: React.PropTypes.number.isRequired,
  incrementTime: React.PropTypes.func.isRequired,
  decrementTime: React.PropTypes.func.isRequired
};
