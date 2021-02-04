import React, { Component } from 'react';
import './Navigation.scss'

class Navigation extends Component {
    render() {
        return (
            <nav className="navigation gradient_border">
                <div className="navigation_bar_column title_nav">
                    <div>Westagram</div>
                </div>

                <div className="navigation_bar_column input_search_container">
                    <input type="text" className="input_search_bar" defaultValue="" placeholder="검색" />
                    <i className="fas fa-search"></i>
                    <div className="searched_id_container">
                        <div className="searched_id_list">
                        </div>
                    </div>
                </div>
                <div className="navigation_bar_column nav_icons">
                    <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" alt="explore" />
                    <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt="heart" />
                    <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png" alt="profile" />
                </div>
            </nav>
        );
    }
}

export default Navigation;