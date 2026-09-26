import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-teal-800 text-white/80 py-6 md:py-8 mt-8 mt-auto'>
      <div className='max-w-7xl mx-auto px-4 flex flex-col items-center justify-center gap-4 md:gap-5'>
        <div className='flex flex-col items-center text-xs md:text-sm text-center'>
          <p className='font-semibold text-white text-sm md:text-base mb-1'>MStorey E-Commerce</p>
          <p>Establishment 2026</p>
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
        
        <div className='flex gap-4 md:gap-6 text-xs md:text-sm'>
          <span className='hover:text-white cursor-pointer transition-colors'>Privacy Policy</span>
          <span className='hover:text-white cursor-pointer transition-colors'>Terms of Service</span>
          <span className='hover:text-white cursor-pointer transition-colors'>Contact Us</span>
        </div>
        
        <div className='text-xs md:text-sm font-medium mt-1 md:mt-2'>
          <p>Made by Namanjot Kohli</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
