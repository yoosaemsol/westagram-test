import React, { Component } from 'react';
import './Comment.scss';

class Comment extends Component {
  render() {
    const { commentList } = this.props;
    return (
      <div className="comment_container">
        {commentList.map((commentlist, index) => {
          return <div key={index} className="comment_written">
            <a className="user_id" href="https://www.instagram.com/sadfrogmeme/">pepe_sad</a>
            <p className="comment_text">{commentlist}</p>
          </div>
        })}
      </div>
    );
  }
}

export default Comment;