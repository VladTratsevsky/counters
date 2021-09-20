import React from "react";

export class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.onClickMinus = this.onClickMinus.bind(this);
  }

  onClickPlus = () => {
    this.setState({
      count: ++this.state.count,
    });
  };

  onClickMinus() {
    this.setState({
      count: --this.state.count,
    });
  }

  onClickReset = () => {
    this.setState({
      count: (this.state.count = 0),
    });
  };

  render() {
    return (
      <div className="count">
        <div className="count-state">{this.state.count}</div>
        <div className="count-button">
          <button className="count-button-plus" onClick={this.onClickPlus}>
            +
          </button>
          <button className="count-button-reser" onClick={this.onClickReset}>
            &#10226;
          </button>
          <button className="count-button-minus" onClick={this.onClickMinus}>
            -
          </button>
        </div>
      </div>
    );
  }
}
