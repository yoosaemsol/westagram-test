import React, { Component } from "react";
import "./Stories.scss";

class Stories extends Component {
  render() {
    return (
      <section className="main-stories">
        <ul>
          {this.props.datas.map((story) => {
            return (
              <li id={story.id}>
                <a href="#" className="story-profile">
                  <img src={story.img_src} alt="profile image" />
                  <span className="story-profile-name">{story.username}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default Stories;
