import "./App.css";
import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage/HomePage";
import ProductsGrid from "./components/ProductsGrid/Productsgrid";
import Product from "./components/Product/Product";
import ShopPage from "./pages/shop/ShopPage";
import SignInAndSignUp from "./pages/sign-in-and sign-out/SignInAndSignUp";

import img from "./Assets/logo.png";

import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";

import { onAuthStateChanged } from "firebase/auth";

import { auth } from "./firebase/config";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => setCurrentUser(user));
    console.log();
  }, []); 

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
              <NavLink className='options' to="/">
                HOME
              </NavLink>
            </div>
            <div>
              <NavLink className='options' to="/shop">SHOP</NavLink>
            </div>
            <div>
              <NavLink className='options' to="/">ORDER</NavLink>
            </div>
            <div>
              {auth.currentUser ? (
                <div onClick={() => auth.signOut()}>SIGN OUT</div>
              ) : (
                <NavLink className='options' to='/signin' >SIGN IN</NavLink> // Render condicional
              )}
            </div>
          </div>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:prodName" element={<Product />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signin" element={<SignInAndSignUp />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
