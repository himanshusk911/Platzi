import { combineReducers } from "redux";
import { productReducer } from "./ProductReducer";
import { cartReducer } from "./CartReducer";
import serachReducer from "./SearchReducer";
const reducers=combineReducers({
    allProducts:productReducer,
    cart:cartReducer,
    search:serachReducer
})

export default reducers;