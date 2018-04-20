import { call, put } from 'redux-saga/effects';
import {hideLoginSpinner, showError, showLoginSpinner} from "../../../../actions/login";
import {CREATE_USER_URL} from "../../../../constants";
import {setAuth} from "../../../../actions/auth";
import {TOKEN} from '../../../../constants'

export function* signup ({ payload }) {
    try {
        yield put(showLoginSpinner());
        const data  = {
            firstName: payload.firstname,
            lastName: payload.lastname,
            email: payload.username,
            password: payload.password,
            invite: TOKEN
        };
        let response = yield call(fetch, CREATE_USER_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(data)
        });
        if(response.status === 200){
            const { data } = yield call([response, response.json]);
            const {id, firstName, lastName,  avatar, email} = data;
            const currentUser = {
                id,
                firstName,
                lastName,
                avatar,
                email
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