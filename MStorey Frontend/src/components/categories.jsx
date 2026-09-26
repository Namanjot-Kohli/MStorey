import React, { useRef, useState, useEffect } from 'react'
import CategoriesCard from './CategoriesCard'
import productDATA from './data2'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'


const categoriesData = [
    { name: 'Fashion', image: 'electric_toaster.avif' },
    { name: 'Electronics', image: '/categories/laptops.jpg' },
    { name: 'Home and Kitchen', image: '/categories/mobiles.jpg' },
    { name: 'Laptops', image: '/categories/fashion.jpg' },
    { name: 'Mobiles', image: '/categories/home-kitchen.jpg' },
    { name: 'Beauty', image: '/categories/beauty.jpg' },
    { name: 'Books', image: '/categories/books.jpg' },
    { name: 'Sports', image: '/categories/sports.jpg' },
    { name: 'Toys', image: '/categories/toys.jpg' },
    { name: 'Grocery', image: '/categories/grocery.jpg' },
]

const Categories = (props) => {
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [props.isScrollable]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  }

  return (
      <div className='bg-teal-50 pt-8 pb-4 px-6 md:px-10 w-full overflow-hidden'>
        <div className='w-full'>     
            <div className='flex justify-between items-center mb-6'>
              <h2 className='text-2xl font-bold text-gray-900'>
                  {props.title}
              </h2>
              {props.isScrollable && (
                <div className='flex gap-2 md:hidden'>
                  <button onClick={() => scroll('left')} className='p-2 rounded-full bg-white shadow hover:bg-gray-100 flex items-center justify-center w-8 h-8 text-teal-800'>
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </button>
                  <button onClick={() => scroll('right')} className='p-2 rounded-full bg-white shadow hover:bg-gray-100 flex items-center justify-center w-8 h-8 text-teal-800'>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </button>
                </div>
              )}
            </div>

            {props.isScrollable ? (
              <div className='relative w-full group'>
                {canScrollLeft && (
                  <button 
                    onClick={() => scroll('left')} 
                    className='hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow hover:bg-gray-100 items-center justify-center w-10 h-10 text-teal-800 opacity-80 hover:opacity-100 transition-opacity'
                  >
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </button>
                )}

                <div ref={scrollRef} onScroll={checkScroll} className='flex gap-4 md:gap-5 overflow-x-auto scroll-smooth hide-scrollbar' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  {categoriesData.map((cat, idx) => (
                    <div key={idx} className='w-40 sm:w-48 md:w-56 shrink-0'>
                      <CategoriesCard name={cat.name} image={cat.image} />
                    </div>
                  ))}
                </div>

                {canScrollRight && (
                  <button 
                    onClick={() => scroll('right')} 
                    className='hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow hover:bg-gray-100 items-center justify-center w-10 h-10 text-teal-800 opacity-80 hover:opacity-100 transition-opacity'
                  >
                    <FontAwesomeIcon icon={faChevronRight} />
                  </button>
                )}
              </div>
            ) : (
              <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-5 w-full'>
                  {categoriesData.map((cat, idx) => (
                      <CategoriesCard
                          key={idx}
                          name={cat.name}
                          image={cat.image}
                      />
                  ))}
              </div>
            )}
        </div>
    </div>
  )
}

export default Categories


