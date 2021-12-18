import { handleActions } from "redux-actions";
import * as constants from "../constants";

const initialState = {
  data: []
};

const categoryReducer = handleActions(
  {
    [constants.GET_CATEGORY_SUCCESS]: (state, action) => {
      console.log(action.payload)
      return {
        ...state,
        data: action.payload
      }
    },

  },
  initialState
);
export default categoryReducer;
