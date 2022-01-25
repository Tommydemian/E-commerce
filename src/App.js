import "./App.css";
import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage/HomePage";
import ProductsGrid from "./components/ProductsGrid/Productsgrid";
import Product from "./components/Product/Product";
import ShopPage from "./pages/shop/ShopPage";
import SignIn from './pages/sign-in/SignIn'
import SignUp from './pages/sign-up/SignUp'
import Profile from './pages/Profile/Profile'
import ForgotPassword from './pages/forgotPassword/ForgotPassword'
import Navbar from './components/navbar/Navbar'

import {ToastContainer, Zoom} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { onAuthStateChanged } from "firebase/auth";
import { auth, createUserProfileDocument } from "./firebase/config";

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  const [currentUser, setCurrentUser] = useState("");

  useEffect(()=>{
    const unsub = auth.onAuthStateChanged(async user => setCurrentUser(user))
    console.log(currentUser)

    return unsub
      
     },[currentUser])   // Persistencia

  return (
    <BrowserRouter>
    <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:prodName" element={<Product />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/sign-in" element={<SignIn currentUser={auth.currentUser}  />} />
          <Route path="/sign-up" element={<SignUp currentUser={auth.currentUser} />} />
          <Route path='/profile' element={<Profile currentUser={auth.currentUser} />} />
          <Route path='/forgot-password' element={<ForgotPassword currentUser={currentUser} />} />   
        </Routes>
      </main>
      <ToastContainer
      transition={Zoom}
      autoClose={3000}
      theme="colored"
      draggable='true'
      
      />
    </BrowserRouter>

  );
}

export default App;
