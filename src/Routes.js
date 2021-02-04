import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ProjectMain from "./Pages/ProjectMain/ProjectMain";
//미현
import LoginMihyeon from "./Pages/mihyeon/Login/Login";
import MainMihyeon from "./Pages/mihyeon/Main/Main";
//샘솔
import LoginSaemsol from "./Pages/saemsolyoo/Login/Login";
import MainSaemsol from "./Pages/saemsolyoo/Main/Main";
//사랑
import LoginSarang from "./Pages/saranglee/Login/Login";
import MainSarang from "./Pages/saranglee/Main/Main";
//유진
import LoginYoojin from "./Pages/yoojinsuh/Login/Login";
import MainYoojin from "./Pages/yoojinsuh/Main/Main";

class Routes extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={ProjectMain}></Route>
                    <Route exact path='/login-miheyon' component={LoginMihyeon} />
                    <Route exact path='/main-miheyon' component={MainMihyeon} />
                    <Route exact path='/login-saemsol' component={LoginSaemsol} />
                    <Route exact path='/main-saemsol' component={MainSaemsol} />
                    <Route exact path='/login-sarang' component={LoginSarang} />
                    <Route exact path='/main-sarang' component={MainSarang} />
                    <Route exact path='/login-yoojin' component={LoginYoojin} />
                    <Route exact path='/main-yoojin' component={MainYoojin} />
                </Switch>
            </Router>
        );
    }
}

export default Routes;