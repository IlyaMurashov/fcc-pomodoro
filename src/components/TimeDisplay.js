import React from 'react';

const format = (currentTime) => {
  const min = currentTime.minutes;
  const sec = currentTime.seconds;

  return (min + ':' + (sec < 10 ? ('0' + sec) : sec));
};

export const TimeDisplay = ({ currentTime }) => {
  return (
    <h1>{format(currentTime)}</h1>
  );
};

TimeDisplay.propTypes = {
  currentTime: React.PropTypes.object.isRequired
};
