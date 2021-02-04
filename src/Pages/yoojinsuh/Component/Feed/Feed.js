import React, { Component } from "react";
import Comment from "../Comment/Comment";
import "../Feed/Feed.scss";

class Feed extends Component {
  constructor() {
    super();
    this.state = {
      id: 20210131,
      comment: "",
      commentList: [],
      btnColor: true,
      heartFilled: false,
    };
  }

  commentValue = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };

  postKeyup = () => {
    this.setState({ btnColor: this.state.comment ? false : true });
  };

  addComment = (e) => {
    if (this.state.comment) {
      this.setState({
        commentList: [
          ...this.state.commentList,
          {
            id: Date.now(),
            user: "hi_yoojins",
            comment: this.state.comment,
          },
        ],
        comment: "",
      });
      e.preventDefault();
    }
  };

  enterCommentList = (e) => {
    if (e.key === "Enter" && this.state.comment) {
      this.addComment();
    }
  };

  deleteComment = (id) => {
    const remainedComment = this.state.commentList.filter((item) => {
      return id !== item.id;
    });

    this.setState({
      commentList: remainedComment,
    });
  };

  fillHeart = () => {
    this.setState({
      heartFilled: !this.state.heartFilled,
    });
  };

  render() {
    const {
      profileImage,
      profileAlt,
      mainFeedAlt,
      userName,
      mainImage,
      content,
      likes,
    } = this.props;
    const { comment, commentList, heartFilled, btnColor } = this.state;
    return (
      <div className="Feed">
        <header>
          <div className="accountContainer">
            <img alt={profileAlt} src={profileImage} />
            <h1> {userName} </h1>
          </div>
          <i className="fas fa-ellipsis-h" />
        </header>
        <img className="mainImage" alt={mainFeedAlt} src={mainImage} />
        <footer>
          <div className="footerNav">
            <i
              className="far fa-heart"
              id={heartFilled ? "heartFilled" : "heartEmpty"}
              onClick={this.fillHeart}
            />
            <i className="far fa-comment" />
            <i className="far fa-paper-plane" />
          </div>
          <div className="footerSave">
            <i className="far fa-bookmark" id="bookmark" />
          </div>
        </footer>
        <p className="likes"> {likes} </p>
        <div className="contentContainer">
          <p className="accountName"> {userName} </p>
          <p className="contentDetail"> {content}</p>
        </div>
        <section className="comments">
          <div className="commentsLog">
            <ul className="commentsContainer">
              {commentList.map((comment) => {
                return (
                  <Comment
                    key={comment.id}
                    id={comment.id}
                    comment={comment.comment}
                    deleteComment={this.deleteComment}
                  />
                );
              })}
            </ul>
          </div>
          <form className="addComment" onKeyUp={this.postKeyup}>
            <input
              className="inputComment"
              type="text"
              placeholder="Add a comment"
              value={comment}
              onChange={this.commentValue}
            />
            <button
              className={!btnColor ? "darkBtn" : "inputSubmit"}
              onClick={this.addComment}
            >
              Post
            </button>
          </form>
        </section>
      </div>
    );
  }
}

export default Feed;
