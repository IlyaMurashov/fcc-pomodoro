import React from 'react';

export default class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      workTime: 25,
      breakTime: 5,

    };
  }

  render() {
    return (
      <div className="pmdr-clock-wrapper">
        stuff here
      </div>
    );
  }
}
