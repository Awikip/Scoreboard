import PropTypes from "prop-types";
import React, { Component } from "react";

export interface ITitleProps {
  content?: string;
}

export default class Title extends Component<ITitleProps> {
  public static propTypes = {
    content: PropTypes.string.isRequired
  };

  public render() {
    return <h1>{this.props.content}</h1>;
  }
}
