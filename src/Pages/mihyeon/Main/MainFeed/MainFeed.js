import React, { Component } from 'react';
import Recommendation from '../Recommendation/Recommendation';
import FeedContent from './FeedContent/FeedContent';
import "./MainFeed.scss"

class MainFeed extends Component {
    state = {
        mainData: [],
        isFollwing: false,
    }
    componentDidMount() {
        fetch('http://localhost:3000/data_mihyeon/mainData.json', {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => {
                this.setState({
                    mainData: data
                })
            })
    }

    render() {
        const { mainData } = this.state;
        return (
            <main className="main_container">
                <FeedContent mainData={mainData} />
                <Recommendation mainData={mainData} isFollwing={() => { }} />
            </main>
        );
    }
}

export default MainFeed;