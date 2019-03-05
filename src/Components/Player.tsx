import React, { Component } from "react";
import "./Player.css";
import PlusButton from "./PlusButton";

export interface IPlayer {
  id?: number;
  name: string;
  score: number;
}

export interface IPlayerProps extends IPlayer {
  updatePlayerScore: (id: number, score: number) => void;
  chaosMonkey: boolean;
}

export default class Player extends Component<IPlayerProps> {
  public static defaultProps = {
    score: 0
  };

  public handleUpdate = () => {
    const { id, score } = this.props;
    if (!id) {
      return;
    }

    this.props.updatePlayerScore(id, score + 1);
  };

  public render() {
    return (
      <li className="player">
        <p className="name">{this.props.name}</p>
        <p className="score">{this.props.score}</p>
        {!this.props.chaosMonkey && <PlusButton onClick={this.handleUpdate} />}
      </li>
    );
  }
}
