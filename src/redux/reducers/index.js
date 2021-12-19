import { combineReducers } from "redux";
import cartReducer from "./cart";
import categoryReducer from "./category";
import generalReducer from "./general";
import productReducer from "./product";
import userReducer from "./user";



const rootReducer = combineReducers({
    user: userReducer,
    general: generalReducer,
    product: productReducer,
    category: categoryReducer,
    cart: cartReducer,
});

export default rootReducer;
