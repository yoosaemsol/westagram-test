import React from "react";
import Navigation from "../Navigation/Navigation";
import MainFeed from "./MainFeed/MainFeed";
import "./Main.scss";


class Main extends React.Component {

    render() {
        return (
            <div className="main">
                <Navigation />
                <MainFeed />
            </div>
        )

    }
}

export default Main;