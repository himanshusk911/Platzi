import './index.css';
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { applySearchFilter} from '../Redux/action';

const Header = () => {
  const dispatch=useDispatch();
    const searchText=useSelector(state=>state.search.searchText)
    const total=useSelector((state)=>state.cart.totalQuantity)
    const handleSearchChange = (event) => {
     dispatch(applySearchFilter(event.target.value))
    console.log(searchText)
    };
  
  
  return (
  <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <h1 className="navbar-brand">PLATZI</h1>
    <div className="d-flex align-items-center">
          <form className="d-flex mr-5">
            <input className="form-control" type="search"
             placeholder="Search" aria-label="Search"
             value={searchText}
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
