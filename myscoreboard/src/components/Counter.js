import React, { Component } from "react";

class Counter extends Component {
  state = {
    score: this.props.initialScore
  };

  incrementScore = e => {
    this.setState({
      score: this.state.score + 1
    });
  };
  decrementScore = e => {
    this.setState({
      score: this.state.score - 1
    });
  };
  render() {
    return (
      <div className="counter">
        <button
          className="counter-action decrement"
          onClick={this.decrementScore}
        >
          -
        </button>
        <div className="counter-score">{this.state.score}</div>
        <button
          className="counter-action increment"
          onClick={this.incrementScore}
        >
          +
        </button>
      </div>
    );
  }
}

export default Counter;
