import { handleActions } from "redux-actions";
import * as constants from "../constants";

const initialState = {
  token: ""
};

const userReducer = handleActions(
  {
    [constants.USER_LOGIN_SUCCESS]: (state, action) => {
      return {
        ...state,
        token: "token here"
      }
    },
    [constants.USER_LOGOUT]: (state, action) => {
      return {
        ...state,
        token: ""
      }
    }
  },
  initialState
);
export default userReducer;
