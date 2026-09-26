import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShirt, faMobile, faTv, faMobileScreen, faVolleyball, faHatCowboy, faBowlFood, faBowlRice, faCat, faCouch, faBook, faSnowman, faUtensils, faPumpSoap, faHeadset, faCarrot, faBagShopping    } from '@fortawesome/free-solid-svg-icons'
import { faTableTennisPaddleBall } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom"

const Sml_Navbar = () => {  
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };
  
  const handleMouseLeave = () => {
    setIsDragging(false);
  };
  
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <>
    <div 
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className={`bg-teal-50 w-full h-12 md:h-15 flex justify-start md:justify-evenly px-4 md:px-20 mt-1 overflow-x-auto [&>div]:shrink-0 gap-4 md:gap-0 hide-scrollbar select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`} 
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
        <Link to='/products/All' className='hover:bg-teal-300 rounded-br-xl rounded-tl-xl cursor-pointer relative z-50 h-full w-14 md:w-18 flex flex-col items-center justify-center p-1'>
            <FontAwesomeIcon className='text-xl md:text-3xl' icon={faBagShopping} />
            <div className='text-xs md:text-sm font-medium'>All</div>
        </Link>
        <Link to='/products/Fashion' className='hover:bg-teal-300 rounded-br-xl rounded-tl-xl cursor-pointer relative z-50 h-full w-14 md:w-18 flex flex-col items-center justify-center p-1'>
            <FontAwesomeIcon className='text-xl md:text-3xl' icon={faHatCowboy} />
            <div className='text-xs md:text-sm font-medium'>Fashion</div>
        </Link>
        <Link to='/products/Sports' className='hover:bg-teal-300 rounded-br-xl rounded-tl-xl cursor-pointer h-full w-14 md:w-18 flex flex-col items-center justify-center p-1'>
            <FontAwesomeIcon className='text-xl md:text-3xl' icon={faVolleyball} />
            <div className='text-xs md:text-sm font-medium'>Sports</div>
        </Link>
        <Link to='/products/Mobiles' className='hover:bg-teal-300 rounded-br-xl rounded-tl-xl cursor-pointer h-full w-14 md:w-18 flex flex-col items-center justify-center p-1'>
            <FontAwesomeIcon className='text-xl md:text-3xl' icon={faMobileScreen} />
            <div className='text-xs md:text-sm font-medium'>Mobiles</div>
        </Link>
        <Link to='/products/Electronics' className='hover:bg-teal-300 rounded-br-xl rounded-tl-xl cursor-pointer h-full w-14 md:w-18 flex flex-col items-center justify-center p-1'>
            <FontAwesomeIcon className='text-xl md:text-3xl' icon={faTv} />
            <div className='text-xs md:text-sm font-medium'>Electronics</div>
        </Link>
        <Link to='/products/Kids' className='hover:bg-teal-300 rounded-br-xl rounded-tl-xl cursor-pointer h-full w-14 md:w-18 flex flex-col items-center justify-center p-1'>
            <FontAwesomeIcon className='text-xl md:text-3xl' icon={faSnowman} />
            <div className='text-xs md:text-sm font-medium'>Kids</div>
        </Link>
        <Link to='/products/Furniture' className='hover:bg-teal-300 rounded-br-xl rounded-tl-xl cursor-pointer h-full w-14 md:w-18 flex flex-col items-center justify-center p-1'>
            <FontAwesomeIcon className='text-xl md:text-3xl' icon={faCouch} />
            <div className='text-xs md:text-sm font-medium'>Furniture</div>
        </Link>
        <Link to='/products/Gaming' className='hover:bg-teal-300 rounded-br-xl rounded-tl-xl cursor-pointer h-full w-14 md:w-18 flex flex-col items-center justify-center p-1'>
            <FontAwesomeIcon className='text-xl md:text-3xl' icon={faHeadset} />
            <div className='text-xs md:text-sm font-medium'>Gaming</div>
        </Link>
        <Link to='/products/Groceries' className='hover:bg-teal-300 rounded-br-xl rounded-tl-xl cursor-pointer h-full w-14 md:w-18 flex flex-col items-center justify-center p-1'>
            <FontAwesomeIcon className='text-xl md:text-3xl' icon={faCarrot} />
            <div className='text-xs md:text-sm font-medium'>Groceries</div>
        </Link>
        <Link to='/products/Pets' className='hover:bg-teal-300 rounded-br-xl rounded-tl-xl cursor-pointer h-full w-14 md:w-18 flex flex-col items-center justify-center p-1'>
            <FontAwesomeIcon className='text-xl md:text-3xl' icon={faCat} />
            <div className='text-xs md:text-sm font-medium'>Pets</div>
        </Link>
        <Link to='/products/Stationery' className='hover:bg-teal-300 rounded-br-xl rounded-tl-xl cursor-pointer h-full w-14 md:w-18 flex flex-col items-center justify-center p-1'>
            <FontAwesomeIcon className='text-xl md:text-3xl' icon={faBook} />
            <div className='text-xs md:text-sm font-medium'>Stationery</div>
        </Link>
        <Link to='/products/Skincare' className='hover:bg-teal-300 rounded-br-xl rounded-tl-xl cursor-pointer h-full w-14 md:w-18 flex flex-col items-center justify-center p-1'>
            <FontAwesomeIcon className='text-xl md:text-3xl' icon={faPumpSoap} />
            <div className='text-xs md:text-sm font-medium'>Skincare</div>
        </Link>
        <Link to='/products/Kitchen' className='hover:bg-teal-300 rounded-br-xl rounded-tl-xl cursor-pointer h-full w-14 md:w-18 flex flex-col items-center justify-center p-1'>
            <FontAwesomeIcon className='text-xl md:text-3xl' icon={faUtensils} />
            <div className='text-xs md:text-sm font-medium'>Kitchen</div>
        </Link>
            

    </div>
    <div >
        <hr className="border-0 h-[2px] bg-neutral-600 mt-2 mb-2" />
    </div>
    </>
  )
}

export default Sml_Navbar
