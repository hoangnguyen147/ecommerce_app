import { combineReducers } from "redux";
import generalReducer from "./general";
import userReducer from "./user";



const rootReducer = combineReducers({
    user: userReducer,
    general: generalReducer
});

export default rootReducer;
