import React, {useRef, useState, useEffect} from 'react'
import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';
import Autoplay from 'embla-carousel-autoplay'
import {images} from './data';

const Slider = () => {  
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 640 : false);
  
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const slides = images.map((url, idx)=>(
      <Carousel.Slide key={idx}>
        <Image className='border-rounded' src={url} fit="contain" h="100%" w="100%" />
      </Carousel.Slide>
      
    ))
  const autoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: false, }));
  
  return (
    <div className='w-full mx-auto bg-teal-50 p-1'>
      <Carousel
        withIndicators = {false}
        withControls = {false}
        height={isMobile ? '55vw' : '19rem'}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={() => autoplay.current.play()}
        type="container"
        slideSize={isMobile ? { base: '100%' } : { base: '100%', '300px': '50%', '500px': '33.333333%' }}
        slideGap={isMobile ? { base: 0 } : { base: 0, '300px': 'md', '500px': 'lg' }}
        emblaOptions={{ loop: true, align: 'start' }}
      >
        {slides}
      </Carousel>
    </div>
  )
}

export default Slider
