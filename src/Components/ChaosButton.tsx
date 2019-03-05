import React, { Component } from "react";

export interface IChaosButtonProps {
  onClick: (event?: any) => void;
}

export default class ChaosButton extends Component<IChaosButtonProps> {
  public render() {
    return (
      <button onClick={this.props.onClick} className="plus-button">
        CHAOS MONKEY SMASH
      </button>
    );
  }
}
