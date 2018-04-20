import {
    SET_AUTH
} from "./types";

export const setAuth = (data) => ({
    type: SET_AUTH,
    payload: data
});
