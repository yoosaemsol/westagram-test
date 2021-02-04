import React, { Component } from 'react';
import "./CommentList.scss"

class CommentList extends Component {
    render() {
        const { id, name, comment, deleteEvent } = this.props;
        return (
            <div key={id} className="each_comment_list" >
                <p className="commented_text">{name} | {comment}</p>
                <p className="commented_text_remove" id={id} onClick={deleteEvent}>삭제</p>
            </div>
        );
    }
}

export default CommentList;