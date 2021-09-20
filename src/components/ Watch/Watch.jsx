import React from "react";

export class Watch extends React.Component {
  constructor(props) {
    super(props);

    this.state = { time: new Date().toLocaleTimeString() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: new Date().toLocaleTimeString(),
    });
  }
  render() {
    return <div className="time">{this.state.time}</div>;
  }
}
