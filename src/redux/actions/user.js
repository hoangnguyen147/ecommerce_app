import { createAction } from "redux-actions";
import * as constants from "../constants";
import { userLogin } from "../../api/auth";
import { setLoading } from "./general";

export const loginSuccess = createAction(constants.USER_LOGIN_SUCCESS);
export const logout = createAction(constants.USER_LOGOUT);


export const login = (data) => {
    return async (dispatch) => {
        try {
            // dispatch(setLoading(true));
            const res = await userLogin(data);
            console.log(res.data);
            
            dispatch(loginSuccess(res.data));
            // dispatch(setLoading(false));

            // dispatch(loginSuccess());
        } catch (err) {
            console.error(err);
        }
    }
}
