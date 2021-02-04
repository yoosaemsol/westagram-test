import React, { Component } from 'react';

import westagramLogo from  '../../../../../images/saranglee/Main/westagramLogo.svg';
import instagram from '../../../../../images/saranglee/Main/instagram.svg';
import search from '../../../../../images/saranglee/Main/search.svg';

import './Nav.scss';

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="nav_container">
          <div className="logo_container">
            <img className="instagram_icon" alt="Instagram Icon" src={instagram} />
            <div className="line" />
            <img className="logo_img" alt="Westagram Logo" src={westagramLogo} />
          </div>
          <div className="search_bar">
            <input className="search" type="search" />
            <div className="search_placeholder">
              <img className="search_icon" alt="Search Icon" src={search} />
              <span>검색</span>
            </div>
          </div>
          <div className="nav_icons">
            <a href="https://www.instagram.com/explore/">
              <img className="explore_icon" alt="Explore Icon" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" />
            </a>
            <a href="https://www.instagram.com/accounts/activity/">
              <img className="heart_icon" alt="Heart Icon" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" />
            </a>
            <img className="profile_icon" alt="Profile Icon" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png" />
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;