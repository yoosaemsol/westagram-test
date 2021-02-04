import React, { Component } from 'react';

import './Recommendation.scss';

class Recommendation extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="recommended_account">
        <div className="img_user_info">
          <a className="aside_img" href={data.userLink}>
            <img alt="Profile" className="user_profile_img img_medium" src={data.userImage} />
          </a>
          <div className="user_id_info">
            <span className="user_id">{data.userId}</span>
            <span className="aside_user_info">{data.follower}</span>
          </div>
        </div>
        <button className="follow btn">팔로우</button>
      </div>
    );
  }
}

export default Recommendation;