import React from 'react'
import { useSelector } from 'react-redux'
import CartItems from './CartItems'
import './CartItemcss.css';
const Cart = () => {
    const items=useSelector(state=>state.cart.items)
    
  return (
    <div className='cart-container'>
            <h2>Your Cart</h2>
            <ul>
                {items.map(item=>(
                    <li key={item.id}>
                      <CartItems
                      id={item.id}
                      price={item.price}
                      title={item.title}
                      quantity={item.quantity}
                      total={item.totalPrice}
                      />
                    </li>
                ))}
            </ul>
        </div>
  )
}

export default Cart