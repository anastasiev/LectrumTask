import React, { Component } from 'react';
import Styles from './styles.scss';

import avatar from '../../theme/assets/img/yarn.jpg';
import {connect} from "react-redux";


class Main extends Component {

    render () {
        const { user } = this.props;
        const firstName = user.get('firstName');
        const lastName = user.get('lastName');
        const avatar = typeof user.get('avatar') === 'undefined' ? avatar : user.get('avatar');



        return (
            <section className = {Styles.Main}>
                <img src={avatar}/>
                <h1> {`${firstName} ${lastName}`} </h1>
            </section>
        )
    }
}
const mapStateToProps = (state) => ({
    user: state.auth.get('currentUser')
});
export default connect(mapStateToProps)(Main);