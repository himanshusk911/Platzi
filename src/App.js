import { BrowserRouter as Router ,Route,Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./components/Header";
import Home from "./components/Home";
import Products from "./components/Products";
import Cart from "./components/Cart";
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={< Products/>}/>
        <Route path="/cart" element={< Cart/>}/>
      </Routes>
    </Router>
  );
}

export default App;
