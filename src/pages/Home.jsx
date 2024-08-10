import React from 'react'
import Navbar from '../components/common/navbar'
import HomeSlider from '../components/HomeSlider'
import Welcome from '../components/Welcome'
import '../constants/animations.css';
import Mission from '../components/Mission';

function Home() {
  return (
    <div>
      <Navbar/>
      <HomeSlider/>
      <Welcome/>
      <Mission/>
    </div>
  )
}

export default Home
