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
            console.log("111")
            const res = await api.getListProduct();
            console.log(res);
            console.log("123123")
            
            dispatch(getProductSuccess(res.data));

        } catch (err) {
            console.error(err);
        }
    }
}
