import { createAction } from "redux-actions";
import * as constants from "../constants";
import { userLogin } from "../../api/auth";
import { setLoading } from "./general";
import * as api from "../../api/product.api";

export const getProductSuccess = createAction(constants.GET_PRODUCT_SUCCESS);


export const getProducts = () => {
    return async (dispatch) => {
        
        try {
            // dispatch(setLoading(true));
            const res = await api.getListProduct();
            
            dispatch(getProductSuccess(res.data));

        } catch (err) {
            console.error(err);
        }
    }
}

export const getProductsNotLoading = () => {
    return async (dispatch) => {
        
        try {
            // dispatch(setLoading(true));
            const res = await api.getListProductNotLoading();
            
            dispatch(getProductSuccess(res.data));

        } catch (err) {
            console.error(err);
        }
    }
}