import React from 'react'
import './CartItemcss.css'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../Redux/action'
const CartItems = ({id,title,price,quantity,total}) => {
  const dispatch=useDispatch()
  const handleOnClick=(itemId)=>{
     dispatch(removeFromCart(itemId))
  }
  return (
    
        <div className="cartItem">
          <h2>{title}</h2>
          <p>${price}</p>
          <p>{quantity}</p>
          <p>${total}</p>
         <button onClick={()=>handleOnClick(id)}>Remove</button>
        </div>
  )
}

export default CartItems