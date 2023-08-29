export const actionTypes={
    SET_PRODUCTS:"SET_PRODUCTS",
    ADD_TO_CART:"ADD_TO_CART",
    REMOVE_FROM_CART:"REMOVE_FROM_CART",
    APPLY_SEARCH_FILTER:'APPLY_SEARCH_FILTER'
}

export const setProducts =(products)=>{
     return {
    type:actionTypes.SET_PRODUCTS,
     payload:products,
     }
}
export const addToCart=(items)=>{
    return{
        type:actionTypes.ADD_TO_CART,
        payload:items,
    }
}
export const removeFromCart=(itemID)=>{
    return{
        type:actionTypes.REMOVE_FROM_CART,
        payload:itemID,
    }
}
export const applySearchFilter=(products)=>{
    return{
        type:actionTypes.APPLY_SEARCH_FILTER,
        payload:products,
    }
}