import { actionTypes } from "./action";
const initialState ={
    searchText:""
}
const serachReducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.APPLY_SEARCH_FILTER:
            return{
                ...state,
                searchText:action.payload
            }
        default:
            return state;
    }
}
export default serachReducer;