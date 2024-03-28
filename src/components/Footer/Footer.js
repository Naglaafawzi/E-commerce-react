import React from 'react'
import "./Footer.scss";
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container py-4 text-center">
        <div className=" main flex align-center justify-center text-white fw-3 fs-14">
          <Link to='/' className="text-uppercase"> Privacy Policy</Link>
          <div className="vert-line"></div>
          <Link to='/' className="text-uppercase">Term Of Server</Link>
          <div className="vert-line"></div>
          <Link to='/' className="text-uppercase">About</Link>
        </div>
        <span className="text-white copyright-text text-manrope fs-14 fw-3">
          &copy; 2024 Naglaa Fawzy. All Rights Reserved
        </span>
      </div>
    </footer>
  )
}

export default Footer