import { handleActions } from "redux-actions";
import * as constants from "../constants";

const initialState = {
  token: "",
  user: "",
  avatar: "",
  fullname: ""
};

const userReducer = handleActions(
  {
    [constants.USER_LOGIN_SUCCESS]: (state, action) => {
      return {
        ...state,
        ...action.payload
      }
    },
    [constants.USER_LOGOUT]: (state, action) => {
      return initialState
    }
  },
  initialState
);
export default userReducer;
