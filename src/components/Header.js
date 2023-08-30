import './index.css';
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { applySearchFilter} from '../Redux/action';
import { Button } from 'react-bootstrap';
import { useUserAuth } from '../context/UserAuthContext';
import { useEffect } from 'react';

const Header = () => {
  const dispatch=useDispatch();
  const {logOut,isLoggedIn} =useUserAuth();
  const navigate=useNavigate()
    const searchText=useSelector(state=>state.search.searchText)
    const total=useSelector((state)=>state.cart.totalQuantity)
    const handleSearchChange = (event) => {
     dispatch(applySearchFilter(event.target.value))
    console.log(searchText)
    };

   
    const handleClick=async()=>{
      try{
        await logOut
        console.log(isLoggedIn)
        navigate("/")
      }catch(err){
        console.log(err.message)
      }
    }
   
  
  return (
  <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <h1 className="navbar-brand"><Link to='/home' className='linkmodify'>PLATZI</Link></h1>
    {isLoggedIn && (

<div className="d-flex align-items-center">
<Button variant='primary' onClick={handleClick}>Log Out</Button>
      <form className="d-flex mr-5">
        <input className="form-control" type="search"
         placeholder="Search" aria-label="Search"
         value={searchText}
         onChange={handleSearchChange}
         onKeyPress={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault(); // Prevent form submission
          }
        }}
         />
      </form>
      
      <div className="ms-2">
         <Link to="/cart" className="cart-link"> 
         <AiOutlineShoppingCart size={30}/>
        <div className='cartNo'>{total}</div>
         </Link>
        
      </div>
      
    </div>

    )}
  </div>
</nav>
  )
}

export default Header
