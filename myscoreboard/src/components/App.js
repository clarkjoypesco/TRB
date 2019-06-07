import React, { Component } from "react";
import Header from "./Header";
import Player from "./Player";

class App extends Component {
  render() {
    return (
      <div className="scoreboard">
        <Header />
        <div className="players">
          {this.props.players.map(player => (
            <Player key={player.id} name={player.name} score={player.score} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
