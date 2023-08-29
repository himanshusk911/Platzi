import { combineReducers } from "redux";
import { productReducer } from "./ProductReducer";
import { cartReducer } from "./CartReducer";
import searchReducer from "./SearchReducer";
const reducers=combineReducers({
    allProducts:productReducer,
    cart:cartReducer,
    search:searchReducer
})

export default reducers;