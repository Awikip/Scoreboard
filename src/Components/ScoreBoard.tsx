import React, { Component } from "react";
import Player, { IPlayer } from "./Player";
import Title from "./Title";

const players: IPlayer[] = [
  {
    id: 1,
    name: "Arien",
    score: 2
  },
  {
    id: 2,
    name: "Mimi",
    score: 5
  },
  {
    id: 3,
    name: "Rein",
    score: 4
  }
];

export default class Scoreboard extends Component {
  public renderPlayer = (player: IPlayer) => (
    <Player key={player.id} name={player.name} score={player.score} />
  );

  render() {
    return (
      <div className="scoreboard">
        <Title content="Scoreboard" />
        <ul>
          {players.sort((a, b) => b.score - a.score).map(this.renderPlayer)}
        </ul>
      </div>
    );
  }
}
