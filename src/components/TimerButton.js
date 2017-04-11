import React from 'react';

function getIcon(buttonType) {
  if (buttonType === 'stop') return 'X';
  if (buttonType === 'run') return '>';
}

export const TimerButton = ({buttonType, onClick}) => {

  return (
    <button onClick={onClick}>
      {getIcon(buttonType)}
    </button>
  );
};

TimerButton.propTypes = {
  buttonType: React.PropTypes.oneOf(['stop', 'pause', 'run']).isRequired,
  onClick: React.PropTypes.func.isRequired
};
