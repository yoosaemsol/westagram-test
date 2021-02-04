import React, { Component } from "react";
import "./Comment.scss";

class Comment extends Component {
  render() {
    return (
      <div className="Comment">
        {this.props.commentList.map((comment) => {
          return (
            <li key={comment.id}>
              <div>
                <a href="#">{comment.userName}</a>
                <span>{comment.content}</span>
              </div>
              <div>
                <i
                  className="fas fa-trash"
                  onClick={() => this.props.deleteComment(comment.id)}
                />
                {comment.isLiked ? (
                  <i className="fas fa-heart like" />
                ) : (
                  <i className="far fa-heart unlike" />
                )}
              </div>
            </li>
          );
        })}
      </div>
    );
  }
}

export default Comment;
