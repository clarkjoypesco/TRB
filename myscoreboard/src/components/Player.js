import React, { Component } from "react";
import Counter from "./Counter";

class Player extends Component {
  render() {
    return (
      <div className="player">
        <div className="player-name">{this.props.name}</div>
        <div className="player-score">
          <Counter initialScore={this.props.initialScore} />
        </div>
      </div>
    );
  }
}

export default Player;
