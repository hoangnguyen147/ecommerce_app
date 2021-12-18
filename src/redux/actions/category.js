import { createAction } from "redux-actions";
import * as constants from "../constants";
import { userLogin } from "../../api/auth";
import { setLoading } from "./general";
import * as api from "../../api/category.api";

export const getCategorySuccess = createAction(constants.GET_CATEGORY_SUCCESS);


export const getCategories = () => {
    return async (dispatch) => {
        try {
            // dispatch(setLoading(true));
            const res = await api.getListCategory();
            
            dispatch(getCategorySuccess(res.data));

        } catch (err) {
            console.error(err);
        }
    }
}
