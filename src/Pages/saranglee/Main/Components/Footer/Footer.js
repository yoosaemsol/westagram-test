import React, { Component } from 'react';
import './Footer.scss'

class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <a href="https://about.instagram.com/">소개</a><span> • </span>
        <a href="https://help.instagram.com/">도움말</a><span> • </span>
        <a href="https://about.instagram.com/blog">홍보 센터</a><span> • </span>
        <a href="https://www.instagram.com/developer/">API</a><span> • </span>
        <a href="https://about.instagram.com/about-us/careers">채용 정보</a><span> • </span>
        <a href="https://help.instagram.com/519522125107875">개인정보처리방침</a><span> • </span>
        <a href="https://help.instagram.com/581066165581870">약관</a><span> • </span>
        <a href="https://www.instagram.com/explore/locations/">위치</a><span> • </span>
        <a href="https://www.instagram.com/directory/profiles/">인기계정</a><span> • </span>
        <a href="https://www.instagram.com/directory/hashtags/">해시태그</a><span> • </span>
        <button className="language">언어</button>
        <p className="copyright">© 2021 INSTAGRAM FROM FACEBOOK</p>
      </footer>
    );
  }
}

export default Footer;