import React from 'react';

import img from '../../Assets/logo.png'

import './Navbar.scss'

import { BrowserRouter, Route, Routes, Link, NavLink, useNavigate, useLocation } from "react-router-dom";

import {auth} from '../../firebase/config'


const Navbar = () => {
  return (<div>
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
              <NavLink className='options' to="/profile">
                PROFILE 
              </NavLink>
            </div>
            <div>
              <NavLink className='options' to="/shop">SHOP</NavLink>
            </div>
            <div>
              <NavLink className='options' to="/">ORDER</NavLink>
            </div>
            <div>
              { auth.currentUser ? (
                <div onClick={() => auth.signOut()}>SIGN OUT</div>
              ) : (
                <NavLink className='options' to='/sign-in' >SIGN IN</NavLink> // Render condicional
              )}
            </div>
          </div>
        </nav>


  </div>)
};

export default Navbar;
