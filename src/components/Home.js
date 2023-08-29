import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch,useSelector } from 'react-redux'
import { setProducts } from '../Redux/action'
import Products from './Products'
import'./index.css'
import Nodata from './Nodata'
const Home = () => {
  const dispatch = useDispatch();
  const searchText=useSelector(state=>state.search.searchText)
 const products=useSelector(state=>state.allProducts.products)
 console.log(products.length)
  useEffect(()=>{
    const fetchProducts=async()=>{
      try{
        const response=await axios
        .get(`https://dummyjson.com/products/search?q=${searchText}`)
        console.log(response.data)
       
          dispatch(setProducts(response.data.products));
        
       
      }catch (error){
        console.log("Error",error)
}
                  
    }
    fetchProducts();
  },[dispatch,searchText])
  
  return(
    <div >
      {products.length >0 ?<Products/>:<Nodata/>}
      
     
    </div>
  )
}

export default Home