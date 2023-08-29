import './index.css';
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { applySearchFilter} from '../Redux/action';
import { useState } from 'react';

const Header = () => {
  const dispatch=useDispatch();
  const [search,setSearch]=useState('')
    const total=useSelector((state)=>state.cart.totalQuantity)
    const handleSearchChange = (event) => {
      dispatch(applySearchFilter(event.target.value)); // Dispatch the action to apply search filter
    };
  
  
  return (
  <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <h1 className="navbar-brand">PLATZI</h1>
    <div className="d-flex align-items-center">
          <form className="d-flex mr-5">
            <input className="form-control" type="search"
             placeholder="Search" aria-label="Search"
             onChange={handleSearchChange}/>
          </form>
          
          <div className="ms-2">
             <Link to="/cart" className="cart-link"> 
             <AiOutlineShoppingCart size={30}/>
            <div className='cartNo'>{total}</div>
             </Link>
            
          </div>
        </div>
  </div>
</nav>
  )
}

export default Header
