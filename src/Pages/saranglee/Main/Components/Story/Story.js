import React, { Component } from 'react';

import './Story.scss';

class Story extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="story">
        <div className="img_user_info">
          <a className="aside_img" href={data.userLink}>
            <div className="story_border" />
            <img alt="Profile" className="user_profile_img img_medium" src={data.userImage} />
          </a>
          <div className="user_id_info">
            <span className="user_id">{data.userId}</span>
            <span className="aside_user_info">{data.time}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Story;