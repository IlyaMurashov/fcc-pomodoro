import React from 'react';

export const TimeAdjGroup = (props) => {
  return (
    <div>
      <h1>{props.time}</h1>
      <button
        onClick={() => {
          props.incrementTime();
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          props.decrementTime();
        }}
      >
        -
      </button>
    </div>
  );
};

TimeAdjGroup.propTypes = {
  time: React.PropTypes.number.isRequired,
  incrementTime: React.PropTypes.func.isRequired,
  decrementTime: React.PropTypes.func.isRequired
};
