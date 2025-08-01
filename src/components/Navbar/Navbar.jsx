import React from 'react'
import "./navbar.css"
import { assets } from '../../assets/frontend_assets/assets'
import { useState } from 'react'


const Navbar = () => {

    const [menu, setMenu] = useState("home");





    return (
        <div className='navbar'>
            
            <img src={assets.logo} alt="logo" className='logo' />
            
            <ul className="navbarMenu">
                <li onClick={() => setMenu("home")} className={menu === "home"?"active":""}>Home</li>
                <li onClick={() => setMenu("menu")} className={menu === "menu"?"active":""}>Menu</li>
                <li onClick={() => setMenu("mobile-app")} className={menu === "mobile-app"?"active":""}>Mobile App</li>
                <li onClick={() => setMenu("contact-us")} className={menu === "contact-us"?"active":""}>Contact Us</li>
            </ul>

            <div className="navbarRight">
                <img src={assets.search_icon} alt="" />
                <div className="navbarSearchIcon">
                    <img src={assets.basket_icon} alt="" />
                    <div className="dot"></div>
                </div>
                <button className="signIn">Sign In</button>
            </div>
        
        </div>
    )
}

export default Navbar;
