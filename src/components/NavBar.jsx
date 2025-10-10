import React from 'react';
import { Link } from 'react-router-dom';
import { BsCart } from "react-icons/bs";
import { useSelector } from 'react-redux';
import logo from "/imagesLogo/Ecommerce_Logo-removebg-preview.png"
import userIcon from '/imagesLogo/user_17033027.png';

function NavBar() {
  const quantity = useSelector(store => store.cartSlice.cartQuantity);

  return (
    <div className='navbar'>
      <div className="navbar_contents">
        <div className="img-container">
          <img src={logo} alt="logo" className='logo' />
        </div>

        <div className="nav_links">
          <Link to="/">Home</Link>

          <Link to="/cart" className="cart_container">
            <BsCart className='cart_icon' />
            <span className='cart_count'>{quantity}</span>
          </Link>

          <Link to="/user">
            <img src={userIcon} alt="user" className='user_icon' />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
