import { combineReducers } from "redux";
import categoryReducer from "./category";
import generalReducer from "./general";
import productReducer from "./product";
import userReducer from "./user";



const rootReducer = combineReducers({
    user: userReducer,
    general: generalReducer,
    product: productReducer,
    category: categoryReducer,
});

export default rootReducer;
