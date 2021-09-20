import React from "react";

export class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { time: 0 };
  }

  timerStart = () => {
    this.timerID = setInterval(
      () =>
        this.setState({
          time: ++this.state.time,
        }),
      1000
    );
  };

  timerStop = () => {
    clearInterval(this.timerID);
  };

  timerReset = () => {
    clearInterval(this.timerID);
    this.setState({
      time: (this.state.time = 0),
    });
  };
  render() {
    return (
      <div className="timer">
        <div className="timer-time">{this.state.time}</div>
        <div className="timer-controlPanel">
          <button className="timer-Btn" onClick={this.timerStart}>
            Start
          </button>
          <button className="timer-Btn" onClick={this.timerStop}>
            Stop
          </button>
          <button className="timer-Btn" onClick={this.timerReset}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}
