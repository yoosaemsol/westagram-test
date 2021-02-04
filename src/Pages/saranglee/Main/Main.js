import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Nav from './Components/Nav/Nav';
import Feed from './Components/Feed/Feed';
import Story from './Components/Story/Story';
import Recommendation from './Components/Recommendation/Recommendation';
import Footer from './Components/Footer/Footer';

import '../../../Styles/reset.scss';
import '../../../Styles/common.scss';
import '../common.scss';
import './Main.scss';

class MainSarang extends Component {
  constructor() {
    super();
    this.state = {
      feedData: [],
      storyData: [],
      recommendationData: []
    };
  }

  componentDidMount() {
    fetch('/data_saranglee/feedData.json')
    .then(res => res.json())
    .then(res => {
      this.setState({
        feedData: res
      })
    })
    fetch('/data_saranglee/storyData.json')
    .then(res => res.json())
    .then(res => {
      this.setState({
        storyData: res
      })
    })
    fetch('/data_saranglee/recommendationData.json')
    .then(res => res.json())
    .then(res => {
      this.setState({
        recommendationData: res
      })
    })
  }

  render() {
    const { feedData, storyData, recommendationData } = this.state;

    return (
      <div className="main">
        <Nav />
        <main>
          <div className="feeds">
            {feedData.map((feed, index) => <Feed data={feed} key={index} />)} 
          </div>
          <div className="wrap_main_right">
            <aside className="main_right">
              <div className="my_profile">
                <a href="https://www.instagram.com/wecode_bootcamp/">
                  <img alt="Profile" className="user_profile_img img_large" src="https://64.media.tumblr.com/515c3489a8ffb744464e32a0dd35b7c9/tumblr_nsgln1egNd1ucxsygo1_400.jpg" />
                </a>
                <a className="user_id" href="https://www.instagram.com/wecode_bootcamp/">pepe_sad</a>
              </div>
              <div className="stories">
                <div className="aside_title_container">
                  <span className="aside_title">스토리</span>
                  <a className="show_all" href="https://www.instagram.com/">모두 보기</a>
                </div>
                {storyData.map((story, index) => <Story data={story} key={index} />)}
              </div>
              <div className="recommendation">
                <div className="aside_title_container">
                  <span className="aside_title">회원님을 위한 추천</span>
                  <a className="show_all" href="https://www.instagram.com/explore/people/suggested/">모두 보기</a>
                </div>
                {recommendationData.map((recommendation, index) => <Recommendation data={recommendation} key={index} />)}
              </div>
              <Footer />
            </aside>
          </div>
        </main>
      </div>
    );
  }
}

export default withRouter(MainSarang);