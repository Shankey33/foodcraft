import React from 'react'
import "./Home.css";
import Navbar from '../../components/Navbar/Navbar.jsx';
import Hero from '../../components/Hero/Hero.jsx';
import FoodMenu from '../../components/Food-menu/FoodMenu.jsx';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <FoodMenu/>
    </div>
  )
}

export default Home
