import React, { Component } from 'react';
import FeedComment from '../FeedComment/FeedComment';
import "./FeedContent.scss";

class FeedConent extends Component {

    state = {
        feedData: [],
        isLike: false,
    }

    componentDidMount() {
        fetch('http://localhost:3000/data_mihyeon/feedData.json', {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                this.setState({
                    feedData: data
                })
            })
    }

    handleHeart = () => {
        this.setState({
            isLike: !this.state.isLike
        })
    }

    render() {
        const { feedData } = this.state;
        const { mainData } = this.props;


        return (
            <div className="feed_container">
                {feedData.map(data => {
                    return (
                        <article key={data.id} className="feed_contents">
                            <div className="feed_header">
                                <img className="round_image"
                                    src={mainData.mainImage}
                                    alt="profile" />
                                <div>
                                    <p>{mainData.mainId}</p>
                                    <p>{mainData.mainContent}</p>
                                </div>
                                <i className="fas fa-ellipsis-h settings_icon"></i>
                            </div>
                            <div className="main_image_container">
                                <img className="main-image"
                                    src={data.image}
                                    alt="purple" />
                            </div>
                            <div className="board_container">
                                <div className="icons_contianer">
                                    <i className="far fa-heart" id={this.state.isLike ? "heart_bold" : "heart_empty"} onClick={this.handleHeart}></i>
                                    <i className="far fa-comment"></i>
                                    <i className="fas fa-external-link-alt"></i>
                                    <i className="far fa-bookmark"></i>
                                </div>
                                <div className="feed_icons_container">
                                    <img className="round_image_small"
                                        src={mainData.mainImage}
                                        alt="profile" />
                                    <span> Purple님 외 4명이 좋아합니다.</span>
                                </div>
                                <div className="feed_message_container">
                                    <span className="feed_main_id">{mainData.mainId}</span>
                                    <span className="feed_message"> {data.content}</span>
                                </div>
                                <FeedComment />
                            </div>
                        </article>
                    )
                })}

            </div>
        );
    }
}

export default FeedConent;