import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import ProductsGrid from "./components/ProductsGrid/Productsgrid";
import Product from "./components/Product/Product";
import ShopPage from "./pages/shop/ShopPage";
import SignInAndSignOut from "./pages/sign-in-and sign-out/SignInAndSignUp";

import img from "./Assets/logo.png";

import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav className="container">
          <div>
            <img className="image" src={img} alt="Logo" />
          </div>
          <div>SearchBox</div>
          <div className="routes">
            <div>
              <NavLink className={(navData) => navData.isActive} to="/">
                HOME
              </NavLink>
            </div>
            <div>
              <NavLink to="/shop">SHOP</NavLink>
            </div>
            <div>
              <NavLink to="/">ORDER</NavLink>
            </div>
            <div>
              <NavLink to="/sign-in">SIGN IN</NavLink>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:prodName" element={<Product/>} />
          <Route path="/shop" element={<ShopPage/>} />
          <Route path='/sign-in' element={<SignInAndSignOut/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
