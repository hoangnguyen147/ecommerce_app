import { handleActions } from "redux-actions";
import * as constants from "../constants";

const initialState = {
  data: {}
};

const cartReducer = handleActions(
  {
    [constants.SET_CART]: (state, action) => {
      return {
        data: action.payload
      }
    },
    [constants.ADD_TO_CART]: (state, action) => {

      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.id]: {
            ...action.payload,
            order: 1
          }
        }
      }
    },
    [constants.CHANGE_ORDER_QUANTITY]: (state, action) => {
      const oldData = state.data;
      const { product_id, type } = action.payload;
      if(oldData[product_id].order == 1 && type == "minus") return state;
      console.log(product_id, type)
      return {
        ...state,
        data: {
          ...oldData,
          [product_id]: {
            ...oldData[product_id],
            order: type == "plus" ? oldData[product_id].order + 1 : oldData[product_id].order - 1
          }
        }
      }
    },

  },
  initialState
);
export default cartReducer;
