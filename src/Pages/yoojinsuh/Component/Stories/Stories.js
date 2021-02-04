import React, { Component } from "react";
import "../Stories/Stories.scss";

class Stories extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { imgAlt, src, account } = this.props;
    return (
      <div className="Stories">
        <img alt={imgAlt} src={src} />
        <p>{account}</p>
      </div>
    );
  }
}

export default Stories;
