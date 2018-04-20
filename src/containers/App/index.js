import React, { Component, Fragment } from 'react';

import { connect } from "react-redux";
import Login from "../Login";
import Main from "../Main";
import {Switch, withRouter} from "react-router-dom";



class App extends Component {

    componentDidMount () {
        const isAuth =  this.props.auth.get('isAuthenticated');
        if (!isAuth) {
            this.props.history.replace('/login');
        }
    }

    render () {
        const { auth } = this.props;

        const renderedComponent = !auth.get('isAuthenticated') ? <Login/> : <Main/>;

        return (
            <Switch>
                {renderedComponent}
            </Switch>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
};


export default withRouter(connect(mapStateToProps)(App));