import {takeEvery} from "redux-saga/effects";
import {LOGIN, SIGNUP} from "../../actions/login/types";
import {login} from "./workers/login";
import {signup} from "./workers/signup";

export default {
    * loginWatcher(){
        yield takeEvery(LOGIN, login);
    },
    * signupWatcher(){
        yield takeEvery(SIGNUP, signup)
    }
}