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
                        backgroundColor: 'tomato',
                        color: 'white',
                        padding: '10px 15px',
                        borderRadius: '20px',
                        fontSize: '16px',
                        marginRight: '30px',
                        alignContent: 'center',
                        marginTop: '4px',
                        fontFamily: 'Poppins, sans-serif'
                }}>Sign-In</li>
        </ul>
    </div>
  )
}

export default Navbar
