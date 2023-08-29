import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../Redux/action'
import './index.css'
const Products = () => {
  const products=useSelector((state)=>state.allProducts.products)
  console.log(products)
  const dispatch=useDispatch()
  const handleAddToCart=(product)=>{
    dispatch(addToCart(product))
    console.log(addToCart(product))
  }
  const renderList=products.map((product)=>{
    const {id,title,images,price,category}=product
    return(
      <div className='card'>
      <div className='col-md-3 mt-4' key={id}>
         <img src={images[0]}  alt={title}/>
        <p className='font-weight-bold '>{title}</p>
        <p className='font-weight-bold text-center'>{category.name}</p>
        <h5 className='font-weight-bold text-center'>${price}</h5>
        <button onClick={()=>handleAddToCart(product)}>Add To Cart</button>
      </div>
      </div>
    )
  })
  return (
    <div className='container'>
      <div className='row'>
        {renderList}
      </div>
    </div>
  )
}

export default Products