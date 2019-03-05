import React, { Component } from "react";

export interface IPlayer {
  id?: number;
  name: string;
  score: number;
}

export default class Player extends Component<IPlayer> {
  public static defaultProps = {
    score: 0
  };

  public render() {
    return (
      <li className="Player">
        <p className="name">{this.props.name}</p>
        <p className="score">{this.props.score}</p>
      </li>
    );
  }
}
