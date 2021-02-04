import React, { Component } from 'react';
import CommentList from '../CommentList/CommentList';
import './FeedComment.scss';

class FeedComment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            comment: '',
            commentList: [],
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/data_mihyeon/commentData.json', {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                this.setState({
                    commentList: data,
                });
            });
    }

    handleWriteComment = (e) => {
        e.preventDefault();
        this.setState({
            comment: e.target.value,
        });
    }

    handleUpdateComment = (e) => {
        e.preventDefault();
        const obj = {
            "id": Date.now(),
            "userName": "colorful",
            "content": this.state.comment,
            "isLiked": false
        }

        this.setState({
            commentList: [...this.state.commentList, obj],
            comment: '',
        })
    }

    handleDeleteComment = (e) => {
        const target = this.state.commentList.filter((item) => {
            return item.id !== Number(e.target.id);
        })
        this.setState({
            commentList: target,
        })
    }

    render() {
        const { commentList, comment } = this.state;
        const commentLiElement = commentList.map((comment) => {
            return (
                <CommentList key={comment.id} id={comment.id} deleteEvent={this.handleDeleteComment} name={comment.userName} comment={comment.content} />
            )
        })

        return (
            <div className="comment_conatainer">
                <div className="comment"> {commentLiElement}</div>
                <div className="comment_line"></div>
                <form className="comment_write_form">
                    <input aria-label="댓글 달기 " className="comment_input" name="comment" placeholder="댓글달기..." onChange={this.handleWriteComment} value={comment}></input>
                    <button className="comment_submit_button" onClick={this.handleUpdateComment} >게시</button>
                </form>
            </div>
        );
    }
}

export default FeedComment;