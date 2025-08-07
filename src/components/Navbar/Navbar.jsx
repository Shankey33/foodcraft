import "./Navbar.css";
import React from 'react'

const Navbar = () => {
  
    return (
    <div className="navbar">
        <div className="navbar-logo">
            <img src="./src/assets/logo.png" alt="FoodCraft Logo" />
        </div>
        <ul className="navbar-links">
                <li>Home</li>
                    <li style={{
                        marginRight: "20px",
                    }}>Sign-In</li>
        </ul>
    </div>
  )
}

export default Navbar
