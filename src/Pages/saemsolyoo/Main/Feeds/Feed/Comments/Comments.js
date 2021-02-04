import React, { Component } from "react";
import Comment from "./Comment/Comment";
import "./Comments.scss";

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentList: [],
      commentValue: "",
      disabled: true,
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/data_saemsolyoo/commentData.json")
      .then((res) => res.json())
      .then((data) => {
        console.log();
        this.setState({
          commentList: data,
        });
      });
  }

  activeSubmitBtn = (e) => {
    if (e.target.value.length > 0) {
      this.setState({ disabled: false });
    } else {
      this.setState({ disabled: true });
    }
  };

  addComment = () => {
    const obj = {
      id: Date.now(),
      userName: "saemsolyoo",
      content: this.state.commentValue,
      isLiked: false,
    };

    this.setState({
      commentList: [...this.state.commentList, obj],
      commentValue: "",
    });
  };

  handleComment = (e) => {
    e.preventDefault();
    this.activeSubmitBtn(e);
    this.setState({ commentValue: e.target.value });

    if (e.key === "Enter" && this.state.commentValue) {
      this.addComment();
      e.target.value = "";
    }

    if (e.target.localName === "button" && this.state.commentValue) {
      this.addComment();
      e.target.parentElement[0].value = "";
    }
  };

  deleteComment = (id) => {
    const remainComment = this.state.commentList.filter((comment) => {
      return comment.id !== Number(id);
    });
    this.setState({
      commentList: remainComment,
    });
  };

  render() {
    const { commentList, commentValue } = this.state;

    return (
      <div className="Comments">
        <ul className="feed-comment-list">
          <Comment
            commentList={commentList}
            deleteComment={this.deleteComment}
          />
        </ul>
        <span className="feed-uploaded-time">{this.props.uploadTime}</span>
        <form className="feed-comment-form">
          <input
            type="text"
            className="feed-comment-input"
            placeholder="댓글 달기..."
            onKeyUp={this.handleComment}
          />
          <button
            className="feed-comment-submit"
            type="submit"
            disabled={this.state.disabled}
            onClick={this.handleComment}
          >
            게시
          </button>
        </form>
      </div>
    );
  }
}

export default Comments;
