import React from 'react';
import classNames from 'classnames';

const formatTime = (currentTime) => {
  const min = currentTime.minutes;
  const sec = currentTime.seconds;

  return (min + ':' + (sec < 10 ? ('0' + sec) : sec));
};

export const TimeDisplay = ({onClick, appState, currentTime }) => {
  const displayClass = classNames({
    'pmdr-round-face': true,
    '-full': appState !== 'stopped',
    '-work': appState === 'work',
    '-break': appState === 'break'
  });

  return (
    <div className={displayClass} onClick={onClick}>
      { appState === 'stopped' ?
        <p>Start!</p> :
        <p className="-full">{formatTime(currentTime)}</p>
      }
    </div>
  );
};

TimeDisplay.propTypes = {
  appState: React.PropTypes.string.isRequired,
  currentTime: React.PropTypes.object.isRequired,
  onClick: React.PropTypes.func.isRequired
};
