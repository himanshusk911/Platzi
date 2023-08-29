import { combineReducers } from "redux";
import { productReducer } from "./ProductReducer";
import { cartReducer } from "./CartReducer";
const reducers=combineReducers({
    allProducts:productReducer,
    cart:cartReducer,
})

export default reducers;