// Core
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'react-router-redux';


import store, { history } from './store'

// App
import App from './containers/App';

ReactDOM.render(
    <Provider store = { store }>
        <Router history = { history }>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root'));
