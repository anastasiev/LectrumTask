import { call, put } from 'redux-saga/effects';
import {hideLoginSpinner, showError, showLoginSpinner} from "../../../../actions/login";
import {LOGIN_URL} from "../../../../constants";
import {setAuth} from "../../../../actions/auth";

export function* login ({ payload }) {
    try {
        yield put(showLoginSpinner());
        const { username, password } = payload;
        let response = yield call(fetch, LOGIN_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify( {
                email: username,
                password: password
            })

        });

        if(response.status === 200){
            const { data } = yield call([response, response.json]);
            const {id, firstName, lastName,  avatar} = data;
            const currentUser = {
                id,
                firstName,
                lastName,
                avatar,
                email: username
            };
            const auth = {
                isAuthenticated: true,
                currentUser,
                token: data.token
            };

            yield put(setAuth(auth));
        } else{
            const { message } = yield call([response, response.json]);
            yield put(showError(message))
        }
    } catch ( { message } ){
        yield put(showError(message));
    } finally {
        yield put(hideLoginSpinner());
    }

}