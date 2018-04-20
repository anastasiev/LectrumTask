import { all } from 'redux-saga/effects';

import login from './login/index'
export function* saga () {
    yield all([
        login.loginWatcher(),
        login.signupWatcher(),
    ]);
}