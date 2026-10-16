import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faLocationDot , faCartShopping, faMagnifyingGlass, faCircleChevronDown, faBars, faXmark, faCircleUser, faBoxOpen, faClipboardQuestion, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import Hamburger from 'hamburger-react'
import { Link } from 'react-router-dom'
// import { Spin as Hamburger } from 'hamburger-react'
const Navbar = () => {
  const [Profile, setProfile] = useState(false)
  const [search, setSearch] = useState("")
  const navigate = useNavigate()
  console.log(search)
  const handleSearch = () =>{
    navigate(`/products?search=${encodeURIComponent(search)}`)
  } 
  return (
    <div className='z-50 w-full h-16 bg-teal-800 flex justify-between items-center fixed top-0 left-0 gap-2 sm:gap-4 lg:gap-6'>
        <Link to='/' className='h-20 p-1 md:p-3 w-32 md:w-40 lg:w-[15%] flex justify-center items-center flex-shrink-0'>
            <img src='/MLOGO.png' className='w-full h-auto'></img>
        </Link>
        <div className='text-white/80 h-full flex-grow flex justify-center items-center px-2 md:px-0'>
            <input 
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            // onChange={(e)=>setSearch(e.target.value?.trim().toLowerCase() || "")}
            placeholder='Search Here...' 
            className='px-2 md:px-4 py-1.5 md:py-2 text-sm md:text-xl rounded-l-md border border-black border-[2px] w-full h-[55%] md:h-[70%] text-black outline-none'>
            </input>
            <button 
            className='text-base md:text-xl cursor-pointer border rounded-r-md border-black border-[2px] border-l-0 px-3 md:px-4 h-[55%] md:h-[70%] bg-teal-700 hover:bg-teal-600 flex justify-center items-center'
            onClick={handleSearch}
            >

                <div>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
            </button>
        </div>

        <div className='hidden lg:flex h-full flex-col justify-center items-center pb-1 px-2'>
            <div className='pl-2 text-xs text-white/60 w-full text-left'>
                Deliver to
            </div>
            <div className='pr-2 font-bold cursor-pointer text-white/80 flex items-center gap-1'>
                <FontAwesomeIcon icon={faLocationDot} />
                <span>ADDRESS</span>
            </div>
        </div>
        {/* <div className=' h-full w-[10%] flex justify-center items-center pr-4'>
            <span className='cursor-pointer font-bold'>MY ORDERS</span>
        </div> */}
        <div className='hidden sm:flex h-full items-center justify-center gap-1 relative px-3 md:px-4'>
            <FontAwesomeIcon className='text-white/80 text-2xl md:text-3xl cursor-pointer' icon={faCartShopping} />
            {/* <span className="font-bold rounded-50  text-xl">0</span> */}
            <div className='absolute bg-red-400 font-bold text-xs md:text-sm cursor-pointer rounded-full w-4 h-4 md:w-5 md:h-5 top-[20%] md:top-[15%] right-[10%] md:right-[15%] flex justify-center items-center'>
                <span>9</span>
            </div>
        </div>
        <div className='h-full flex mr-2 md:mr-4 justify-center items-center relative gap-1 md:gap-2'>
            <img src='/pfp_del.jpg' className='hidden sm:block w-8 h-8 md:w-10 md:h-10 border border-white/40 rounded-full cursor-pointer object-cover'></img>
            {/* <span className='truncate absolute top-[10%] left-[%]' >Namanjot Kohli</span>
            <FontAwesomeIcon className='absolute top-[65%] right-[5%] ' icon={faCircleChevronDown} /> */}
            
            {/* <button onClick={()=> {setProfile(!Profile)}}>
                {Profile? 
                (<FontAwesomeIcon className='cursor-pointer text-2xl' icon={faXmark} />)
                :(<FontAwesomeIcon className='cursor-pointer text-2xl' icon={faBars} />)}
            </button> */}
            {/* <FontAwesomeIcon className='cursor-pointer text-2xl' icon={faBars} /> */}
            <div className='scale-75 md:scale-100'>    
                <Hamburger className='text-white/80' color="rgba(255,255,255,0.6)" toggled={Profile} toggle={setProfile} size={25} />
            </div>

        </div>
        {Profile && (
            <div className='absolute top-16 right-1 p-3 bg-white border border-teal-800 shadow-xl w-56 rounded-md'>
                <div className='flex items-center gap-3 mb-2 sm:hidden border-b pb-2'>
                    <img src='/pfp_del.jpg' className='w-10 h-10 border border-gray-400 rounded-full object-cover'></img>
                    <div className='font-bold'>Your Account</div>
                </div>
                <div className='hidden sm:block font-bold mb-2'>Your Account</div>
                
                <div className='w-full flex flex-col justify-around gap-1'>
                    <div className='sm:hidden h-12 rounded-lg flex items-center cursor-pointer hover:bg-teal-400 pl-2 gap-2 relative'>
                        <div className='relative'>
                            <FontAwesomeIcon className='text-[20px]' icon={faCartShopping} />
                            <div className='absolute bg-red-400 font-bold text-[10px] cursor-pointer rounded-full w-4 h-4 -top-2 -right-2 flex justify-center items-center text-white'>
                                <span>9</span>
                            </div>
                        </div>
                        <span className='mb-[0.5px] ml-1'>Cart</span>
                    </div>
                    <div className='h-12 rounded-lg flex items-center cursor-pointer hover:bg-teal-400 pl-2 gap-2'>
                        <FontAwesomeIcon className='text-[20px]' icon={faCircleUser} />
                        <span className='mb-[0.5px]'>Profile</span>
                    </div>
                    <div className='h-12 rounded-lg flex items-center cursor-pointer hover:bg-teal-400 pl-2 gap-2'>
                        <FontAwesomeIcon className='text-[20px]' icon={faBoxOpen} />
                        <span className='mb-[0.5px]'>Orders</span>
                    </div>
                    <div className='h-12 rounded-lg flex items-center cursor-pointer hover:bg-teal-400 pl-2 gap-2'>
                        <FontAwesomeIcon className='text-[20px]' icon={faClipboardQuestion} />
                        <span className='mb-[0.5px]'>Queries</span>
                    </div>
                    <div className='h-12 rounded-lg flex items-center cursor-pointer hover:bg-red-400 hover:font-bold pl-2 gap-2'>
                        <FontAwesomeIcon className='text-[20px]' icon={faArrowRightFromBracket} />
                        <span className='mb-[0.5px]'>Logout</span>
                    </div>
                </div>
            </div>
        )}


    </div>
  )
}

export default Navbar
