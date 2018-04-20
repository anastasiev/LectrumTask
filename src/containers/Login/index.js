import React, { Component } from 'react';
import { connect } from "react-redux";
import Styles from './styles.scss';
import LoginForm from "../../components/LoginForm";


class Login extends Component{

    render () {

        return (
            <section className = {Styles.Login}>
                <LoginForm/>
            </section>
        )
    }

}

export default connect()(Login);