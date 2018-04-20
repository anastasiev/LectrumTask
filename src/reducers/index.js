// Core
import { combineReducers } from 'redux';

// Instruments

import auth from './auth/index';
import login from './login/index';
import forms from './forms/index';



export default combineReducers({
    auth,
    login,
    forms,
});
