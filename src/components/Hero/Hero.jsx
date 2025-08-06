import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className="hero">
        <div className="video-container">
            <video autoPlay muted loop playsInline src="/hero-bg.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <h2>Order your favourite food now</h2>
            <p>Hygenic, Delicious and Freshly cooked dishes straight to your doorsteps!</p>
        </div>
    </div>
  )
}

export default Hero
