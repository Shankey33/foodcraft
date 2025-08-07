import React from 'react'
import { useContext } from 'react'
import './Hero.css'
import { food_images_category } from '../../assets/food-images/assets'
import { useState } from 'react'
import { FoodContext } from '../../context/FoodContext.jsx'

const Hero = () => {


  const { activeCategory, setActiveCategory } = useContext(FoodContext);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    window.scrollTo({
      top: document.querySelector('.food-menu').offsetTop, // Scroll to the top of the food menu section
      behavior: 'smooth' // Smooth scroll effect
    });
  };




  return (
    <div className="hero">
        <div className="video-container">
            
            <video autoPlay muted loop playsInline src="/hero-bg.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            
            <h2>Order your favourite food now!</h2>
            <p>Hygenic, Delicious and Freshly cooked dishes straight to your doorsteps</p>
            
            <div className="food-category">
              {
                food_images_category.map((item) => {
                  return (
                    <div className="food-category-card"  key={item.id} onClick={()=>handleCategoryClick(item.category)}>
                      <img id={activeCategory===item.category?"active":""} src={item.image} alt={item.name} />
                      <h3>{item.category}</h3>
                    </div>
                  )
                })
              }
            </div>
        </div>
    </div>
  )
}

export default Hero
