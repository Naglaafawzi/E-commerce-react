import React, { useEffect, useState } from 'react';
import "./Navbar.scss";
import { HiBars3CenterLeft } from "react-icons/hi2"
import { FaShoppingBag } from "react-icons/fa"
import { BiSearchAlt } from "react-icons/bi"
import { HiShoppingCart } from "react-icons/hi"
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSidebarOn } from '../../store/sidebarSlice';
import { getAllCategories } from '../../store/categorySlice';
import { getAllCarts, getCartTotal, getItemsCount } from '../../store/cartSlice';
import CartModal from '../CartModal/CartModal';

const NavBar = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getAllCategories);
  const carts = useSelector(getAllCarts)
  const itemCount = useSelector(getItemsCount)
  const cartModal = document.querySelector("#cartModal")
  const [searchTerm, setSearchTerm] = useState('');

  const [openDiv, setOpenDiv] = useState(false);
  if (openDiv) {
    if (cartModal) {
      cartModal.style.display = "block"
    }
  } else {
    if (cartModal) {
      cartModal.style.display = "none"
    }
  }

  const handleSearchTerm = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value)
  }

  useEffect(() => {
    dispatch(getCartTotal())
  }, [carts, dispatch]);

  return (
    <nav className='navbar'>
      <div className='navbar-cnt flex align-center'>
        <div className='brand-and-toggle flex align-center'>
          <button className='sidebar-show-btn text-white' onClick={() => dispatch(setSidebarOn())}>
            <HiBars3CenterLeft />
          </button>
          <Link to="/" className='navbar-brand flex align-center'>
            <span className='navbar-brand-ico'>
              <FaShoppingBag />
            </span>
            <span className='navbar-brand-txt mx-2'>
              <span className="fw-7 fs-20">NOUR STORE</span>
            </span>
          </Link>
        </div>

        <div className='navbar-collapse w-100'>
          <div className='navbar-search bg-white'>
            <div className='flex align-center'>
              <input type="search" className="form-control fs-14" placeholder='Search your preferred items here' onChange={(e) => handleSearchTerm(e)} />
              <Link to={`search/${searchTerm}`} className='text-white search-btn flex align-center justify-center'>
                <BiSearchAlt />
              </Link>
            </div>
          </div>

          <ul className='navbar-nav flex align-center fs-12 fw-4 font-manrope'>
            {
              categories.slice(0, 8).map((category, idx) => (
                <li className='nav-item no-wrap' key={idx}>
                  <Link to={`category/${category}`} className='nav-link text-capitalize'>{category.replace("-", " ")}</Link>
                </li>
              ))
            }
          </ul>
        </div>

        <div className='navbar-cart flex align-center'>
          <div to="/cart" className='cart-btn' onClick={() => setOpenDiv(!openDiv)}>
            <HiShoppingCart />
            <div className='cart-items-value'>{itemCount}</div>
            <CartModal carts={carts} />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar