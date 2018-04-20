import { Map } from "immutable";
import {SET_AUTH} from "../../actions/auth/types";

const initialState = Map({
    isAuthenticated: false,
    currentUser: null,
    token: null
});

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_AUTH:
            return state.merge(payload);
        default:
            return state;
    }
};