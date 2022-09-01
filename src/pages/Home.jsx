import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import FeaturedProdcuts from '../components/FeaturedProdcuts'
import Footer from '../components/Footer'
import Navbar from '../components/navbar'
import Newsletter from '../components/Newsletter'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Slider/>
        <FeaturedProdcuts/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home