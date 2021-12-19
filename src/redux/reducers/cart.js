import { handleActions } from "redux-actions";
import * as constants from "../constants";

const initialState = {
  data: []
};

const cartReducer = handleActions(
  {
    [constants.SET_CART]: (state, action) => {
      return {
        data: action.payload
      }
    },
    [constants.ADD_TO_CART]: (state, action) => {
      const temp = state.data
      temp.push({
        ...action.payload,
        order: 1
      })
      return {
        data: temp
      }
    },

  },
  initialState
);
export default cartReducer;
