import { Map } from "immutable";
import {
    HIDE_ERROR_LOGIN,
    HIDE_LOGIN_SPINNER, SHOW_ERROR_LOGIN, SHOW_LOGIN_FORM, SHOW_LOGIN_SPINNER,
    SHOW_SIGNUP_FORM
} from "../../actions/login/types";


const initialState = Map({
    isLogin: false,
    error: Map({
        show: false,
        errorMessage: ''
    }),
    ui: Map({
        showSpinner: false
    })
});

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case SHOW_LOGIN_FORM:
            return state.merge({isLogin: true});
        case SHOW_SIGNUP_FORM:
            return state.merge({isLogin: false});
        case SHOW_LOGIN_SPINNER:
            return state.setIn(['ui','showSpinner'], true);
        case HIDE_LOGIN_SPINNER:
            return state.setIn(['ui','showSpinner'], false);
        case SHOW_ERROR_LOGIN:
            return state.merge({error:{show: true, errorMessage: payload}});
        case HIDE_ERROR_LOGIN:
            return state.merge({error:{show: false, errorMessage: ''}});

        default:
            return state;
    }

};