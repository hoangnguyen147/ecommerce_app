import { createAction } from "redux-actions";
import * as constants from "../constants";

export const addToCart = createAction(constants.ADD_TO_CART);
export const setCart = createAction(constants.SET_CART);
export const changeQuantity = createAction(constants.CHANGE_ORDER_QUANTITY);



