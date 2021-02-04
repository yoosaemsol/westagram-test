import React, { Component } from "react";
import "./Comment.scss";

class Comment extends Component {
  constructor() {
    super();
    this.state = {
      heartFilled: false,
    };
  }

  fillHeart = () => {
    this.setState({
      heartFilled: !this.state.heartFilled,
    });
  };

  render() {
    const { id, comment, deleteComment } = this.props;
    return (
      <li className="Comment">
        <div>
          <span className="userAccount">hi_yoojins</span>
          <span> {comment}</span>
        </div>
        <div className="heartAndTrash">
          <i className="far fa-trash-alt" onClick={() => deleteComment(id)} />
          <i
            className="far fa-heart"
            id={this.state.heartFilled ? "heartFilled" : "heartEmpty"}
            onClick={this.fillHeart}
          />
        </div>
      </li>
    );
  }
}

export default Comment;
