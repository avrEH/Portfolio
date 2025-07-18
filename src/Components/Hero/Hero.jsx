import React from 'react'
import './Hero.css'
import profile_img from '../../assets/logo.jpg'
const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt="" style={{
    width: "100%",
    maxWidth: "250px",  
    height: "auto",
    borderRadius: "50%",
    objectFit: "cover",
    border: "8px solid #2a2a2a"
  }} />
        <h1><span>I'm Aditya Vardhan Rai</span> Engineering Student based in India</h1>
        <p>Hi! I'm a second-year B.Tech student at Galgotias University, passionate about coding, technology, and creativity.</p>
    <div className="hero-action">
        <div className="hero-connect">Connect with me</div>
        <div className="hero-resume">My resume</div>
    </div>
    </div>

  )
}

export default Hero