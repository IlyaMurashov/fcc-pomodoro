import React from 'react';

export const TimeDisplay = ({currentTime, appState}) => {
  return (
    <h1>{currentTime.minutes}{':'}{currentTime.seconds}, {appState}</h1>
  );
};

TimeDisplay.propTypes = {
  currentTime: React.PropTypes.object.isRequired,
  appState: React.PropTypes.string.isRequired
};
