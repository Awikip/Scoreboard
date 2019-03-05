import React, { Component } from "react";
import Player, { IPlayer } from "./Player";
import Title from "./Title";
import "./ScoreBoard.css";
import ChaosButton from "./ChaosButton";

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

interface IScoreBoardState {
  players: IPlayer[];
  chaosMonkey: boolean;
  clock: number;
}

export default class Scoreboard extends Component<{}, IScoreBoardState> {
  public state: Readonly<IScoreBoardState> = {
    chaosMonkey: false,
    clock: 0,
    players: [
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
    ]
  };

  public updatePlayerScore = (id: number, score: number) => {
    this.setState({
      players: this.state.players.map(player => {
        if (player.id === id) {
          return {
            ...player,
            score
          };
        } else {
          return player;
        }
      })
    });
  };

  public runChaos = () => {
    this.setState({ chaosMonkey: true, clock: 0 });

    const interval = setInterval(() => {
      let i = this.state.players[Math.floor(Math.random() * players.length)];
      if (typeof i.id == "number") {
        this.updatePlayerScore(i.id, i.score + 1);
      }

      this.setState({ clock: this.state.clock + 0.5 });
      if (this.state.clock == 60) {
        clearInterval(interval);
        this.setState({ chaosMonkey: false });
      }
    }, 500);
  };

  public renderPlayer = (player: IPlayer) => (
    <Player
      id={player.id}
      name={player.name}
      score={player.score}
      updatePlayerScore={this.updatePlayerScore}
      chaosMonkey={this.state.chaosMonkey}
    />
  );

  public render() {
    const { players } = this.state;
    return (
      <div className="scoreboard">
        <Title content="Scoreboard" />
        <ul>
          {players.sort((a, b) => b.score - a.score).map(this.renderPlayer)}
        </ul>
        <ChaosButton onClick={this.runChaos} />
      </div>
    );
  }
}
