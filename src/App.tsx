import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Title from "./Components/Title";
import Player from "./Components/Player";
import Scoreboard from "./Components/ScoreBoard";

class App extends Component {
  render() {
    return (
      <main>
        <Scoreboard />
      </main>
    );
  }
}

export default App;
