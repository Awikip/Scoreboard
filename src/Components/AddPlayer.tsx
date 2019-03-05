import React, { Component } from "react";
import "./AddPlayer.css";

interface IAddPlayerState {
  name: string;
}

interface IAddPlayerProps {
  addPlayer: (name: string) => void;
}

export default class AddPlayer extends Component<
  IAddPlayerProps,
  IAddPlayerState
> {
  public state: IAddPlayerState = {
    name: ""
  };

  public render() {
    return (
      <div className="add-player">
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </label>
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }

  private handleChange = (event: any) => {
    this.setState({
      name: event.target.value
    });
  };

  private handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    this.props.addPlayer(this.state.name);
    this.setState({ name: "" });
  };
}
