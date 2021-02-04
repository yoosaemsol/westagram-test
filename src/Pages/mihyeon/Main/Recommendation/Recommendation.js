import React, { Component } from 'react';
import './Recommendation.scss';

class Recommendation extends Component {

    state = {
        followerList: [],
        isFollow: false,
    }

    componentDidMount() {
        fetch('http://localhost:3000/data_mihyeon/followerData.json', {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                this.setState({
                    followerList: data,
                });
            });
    }

    handleFollow = (e) => {
        this.setState({
            isFollow: !this.state.isFollow,
        })
    }
    render() {
        const { followerList, isFollow } = this.state;
        const { mainData } = this.props;

        return (
            <aside className="recommendation">
                <div className="main_right_container">
                    <div className="recomandation_profile">
                        <img className="round_image"
                            src={mainData.mainImage}
                            alt="profile" />
                        <div className="own_profile_container">
                            <p>{mainData.mainId}</p>
                            <p>{mainData.mainContent}</p>
                        </div>
                        <div>전환</div>
                    </div>
                    <div className="recomandation_list">
                        <div className="recomandation_list_text">
                            <p>회원님을 위한 추천</p>
                            <p>모두 보기</p>
                        </div>
                        <div className="recommendation_cotainer">
                            {followerList.map((follower, index) => {
                                return (
                                    <div key={index} className="recomandation_individual">
                                        <img className="round_image" src={follower.image} alt="recomandation" />
                                        <div className="user_container">
                                            <span className="user_id">{follower.nickname}</span>
                                            <span className="user_follow_status">{follower.content}</span>
                                        </div>
                                        <div className="follow_text" onClick={this.handleFollow}>{isFollow ? "Unfollow" : "Follow"}</div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </aside>
        );
    }
}

export default Recommendation;