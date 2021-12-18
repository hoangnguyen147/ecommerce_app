import { handleActions } from "redux-actions";
import * as constants from "../constants";

const initialState = {
  data: []
};

const productReducer = handleActions(
  {
    [constants.GET_PRODUCT_SUCCESS]: (state, action) => {
      console.log("action")
      console.log(action.payload)
      return {
        ...state,
        data: action.payload
      }
    },

  },
  initialState
);
export default productReducer;
