import React from 'react';

export const TimeDisplay = ({currentTime}) => {
  return (
    <h1>{currentTime}</h1>
  );
};

TimeDisplay.propTypes = {
  currentTime: React.PropTypes.string.isRequired
};
