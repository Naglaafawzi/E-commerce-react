import React from 'react';
import "./Header.scss";
import { Link } from "react-router-dom";
import NavBar from '../Navbar/NavBar';
import {FaFacebook} from "react-icons/fa"
import {BsInstagram} from "react-icons/bs"
import {AiFillQuestionCircle} from "react-icons/ai"

const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='header-cnt'>
          <div className='header-cnt-top fs-13 py-2 flex align-center justify-between'>
            <div className='header-cnt-top-l'>
              <ul className='flex top-links align-center'>
                <li>
                  <Link to="/seller">
                    Seller Center
                  </Link>
                </li>
                <li className='vert-line'></li>
                <li>
                  <Link to="/download">
                    Download
                  </Link>
                </li>
                <li className='vert-line'></li>
                <li className='flex align-center'>
                  <span className='fs-13'> Follow us on</span>
                  <ul className='social-links flex align-center'>
                    <li className='mx-2'>
                      <a href="wwww.facebook.com" className='fs-15'>
                        <FaFacebook />
                      </a>
                    </li>
                    <li className='mx-2'>
                      <a href="wwww.instagram.com" className='fs-15'>
                        <BsInstagram />
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className='header-cnt-top-r'>
              <ul className='top-links flex align-center'>
                <li>
                  <Link to="/" className='top-link-itm'>
                    <span className='top-link-itm-ico mx-2'>
                      <AiFillQuestionCircle />
                    </span>
                    <span className='top-link-itm-txt'>
                      Support
                    </span>
                  </Link>
                </li>
                <li className='vert-line'></li>
                <li>
                  <Link to="/" className='top-link-itm'>
                    <span className='top-link-itm-txt'>
                      Register
                    </span>
                  </Link>
                </li>
                <li className='vert-line'></li>
                <li>
                  <Link to="/" className='top-link-itm'>
                    <span className='top-link-itm-txt'>
                      Log in
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className='header-cnt-bottom'>
            <NavBar />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header