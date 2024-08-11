import React from 'react'
import Navbar from '../components/common/navbar'
import HomeSlider from '../components/HomeSlider'
import Welcome from '../components/Welcome'
import '../constants/animations.css';
import Mission from '../components/Mission';
import HomeAbout from '../components/HomeAbout'


function Home() {
  return (
    <div>
      <Navbar/>
      <HomeSlider/>
      <HomeAbout/>
      <Mission/>
    </div>
  )
}

export default Home
