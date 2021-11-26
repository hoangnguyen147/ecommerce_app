import { createAction } from "redux-actions";
import * as constants from "../constants";

export const loginSuccess = createAction(constants.USER_LOGIN_SUCCESS);
export const logout = createAction(constants.USER_LOGOUT);


export const login = () => {
    return async (dispatch) => {
        dispatch(loginSuccess());
    }
}
