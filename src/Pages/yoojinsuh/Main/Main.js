import React from "react";
import Stories from "../Component/Stories/Stories";
import Feed from "../Component/Feed/Feed";
import Suggestion from "../Component/Suggestion/Suggestion";

import "./Main.scss";
import "../../../Styles/reset.scss";
import "../../../Styles/common.scss";

import profilepic from "../../../images/yoojin/main/profilepic.jpeg";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      feedList: [],
      storiesList: [],
      suggestList: [],
    };
  }

  componentDidMount() {
    fetch("/data_yoojin/feedData.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          feedList: data,
        });
      });
    fetch("/data_yoojin/storiesData.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          storiesList: data,
        });
      });
    fetch("/data_yoojin/suggestData.json", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          suggestList: data,
        });
      });
  }

  render() {
    return (
      <div className="Main">
        <div className="navbar">
          <p className="logo"> Westagram </p>
          <div className="searchContainer">
            <i className="fas fa-search" />
            <input className="search" type="text" placeholder="Search" />
          </div>
          <nav className="navIcons">
            <i className="fas fa-home" />
            <i className="far fa-paper-plane" />
            <i className="far fa-heart" />
            <i className="far fa-user" />
          </nav>
        </div>
        <main>
          <div className="mainLeft">
            <div className="storyContainer disable-scrollbars">
              {this.state.storiesList.map((story, id) => {
                return (
                  <Stories
                    name={story.name}
                    key={id}
                    imgAlt={story.imgAlt}
                    src={story.src}
                    account={story.account}
                  />
                );
              })}
            </div>
            <div className="feedContainer">
              {this.state.feedList.map((feed, id) => {
                return (
                  <Feed
                    key={id}
                    profileAlt={feed.profileAlt}
                    mainFeedAlt={feed.mainFeedAlt}
                    profileImage={feed.profileImage}
                    userName={feed.userName}
                    mainImage={feed.mainImage}
                    content={feed.content}
                    likes={feed.likes}
                  />
                );
              })}
            </div>
          </div>
          <div className="mainRight">
            <div className="myProfile">
              <img alt="myProfile pic" src={profilepic} />
              <div className="accountInfo">
                <h1>hi_yoojins</h1>
                <h2>Rylie YooJin Suh</h2>
              </div>
            </div>
            <div className="suggestions">
              <div className="header">
                <p className="suggestForYou">Suggestions For You</p>
                <p className="seeAll">See All</p>
              </div>
              <div className="suggestProfiles">
                {this.state.suggestList.map((suggest, id) => {
                  return (
                    <Suggestion
                      key={id}
                      name={suggest.name}
                      profileName={suggest.profileName}
                      imgAlt={suggest.imgAlt}
                      src={suggest.src}
                      detail={suggest.detail}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Main;
