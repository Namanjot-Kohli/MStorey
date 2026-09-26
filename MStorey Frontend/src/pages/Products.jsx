import React from 'react'
import Navbar from '../components/Navbar'
import Sml_Navbar from '../components/Sml_Navbar'
import Footer from '../components/Footer'
import ProductCard from '../components/ProductCard'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'


const Products = () => {
  return (
    <div className='bg-teal-50'>
      <Navbar/>
      <div className='pt-16 mb-8'>
        <Sml_Navbar/>
      </div>  
      <ProductCard />
      <div className='mt-10'>
        <Footer/>
      </div>


    </div>
  )
}

export default Products
