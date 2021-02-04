import React, { Component } from "react";
import "../Suggestion/Suggestion.scss";

class Suggestion extends Component {
  constructor() {
    super();
    this.state = {
      follow: false,
    };
  }

  followMe = () => {
    this.setState({
      follow: !this.state.follow ? true : false,
    });
  };

  render() {
    const { id, profileName, imgAlt, src, detail } = this.props;
    return (
      <div className="profile" id={id}>
        <div className="imageAndName">
          <img alt={imgAlt} src={src} />
          <div className="profileContainer">
            <p className="name">{profileName}</p>
            <p className="detail">{detail}</p>
          </div>
        </div>
        <p className="follow" onClick={this.followMe}>
          {this.state.follow ? "Unfollow" : "Follow"}
        </p>
      </div>
    );
  }
}

export default Suggestion;
