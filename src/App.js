import { BrowserRouter as Router ,Route,Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./components/Header";
import Home from "./components/Home";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import ProtectedRoute from "./components/ProctedRoute";
import { UserAuthContextProvider} from "./context/UserAuthContext";
import { useUserAuth } from "./context/UserAuthContext";
function App() {
  return (
    <Router>
      <UserAuthContextProvider>
        <Header/>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={
        <ProtectedRoute>
          <Home/>
        </ProtectedRoute>
        }/>
        <Route path="/products" element={< Products/>}/>
        <Route path="/cart" element={< Cart/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
      </UserAuthContextProvider>
    </Router>
  );
}

export default App;
