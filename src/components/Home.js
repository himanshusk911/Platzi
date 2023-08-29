import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch,useSelector } from 'react-redux'
import { setProducts } from '../Redux/action'
import Products from './Products'
import'./index.css'
const Home = () => {
  const dispatch = useDispatch();
  
  const products = useSelector((state) => state.allProducts.products);
 
  useEffect(()=>{
    const fetchProducts=async()=>{
      try{
        const response=await axios
        .get(`https://dummyjson.com/products`)
        console.log(response.data)
        dispatch(setProducts(response.data.products));
      }catch (error){
        console.log("Error",error)
}
                  
    }
    fetchProducts();
  },[dispatch])
  
  return(
    <div >
      <Products/>
     
    </div>
  )
}

export default Home