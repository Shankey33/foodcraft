import React from 'react'
import './Footer.css'
import logo from '../../../assets/logo.png'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-left">
            <img src={logo} alt="foodcraft logo for footer" />
        </div>
        <div className="footer-center">
            <p>© 2025 FoodCraft. All rights reserved</p>
        </div>
        <div className="footer-right">
            <p>Made with ❤️ by Shankey</p>
        </div>
    </div>
  )
}

export default Footer
