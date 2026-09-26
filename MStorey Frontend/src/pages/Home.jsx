import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Carousel'
import Categories from '../components/categories'
import Sml_Navbar from '../components/Sml_Navbar'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='bg-teal-50 min-h-screen flex flex-col'>
      <Navbar/>
      
      <div className='pt-16'>
        <Sml_Navbar/>
        
        <Slider/>
      </div>
      <Categories title='Featured Products'/>
      <Categories title='Recently Viewed' isScrollable={true}/>
      
      <div className='mt-10'>
        <Footer/>
      </div>
    </div>
  )
}

export default Home
