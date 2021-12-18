import { handleActions } from "redux-actions";
import * as constants from "../constants";

const initialState = {
  isLoading: false
};

const generalReducer = handleActions(
  {
    [constants.SET_LOADING]: (state, action) => {
      return {
        ...state,
        isLoading: action.payload
      }
    },

  },
  initialState
);
export default generalReducer;
