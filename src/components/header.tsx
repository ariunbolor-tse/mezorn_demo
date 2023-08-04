import React from 'react'
import menu from '../assets/pictures/menu.png'
import logo from '../assets/pictures/cropped-lars-logo.webp'
import search from '../assets/pictures/search-interface-symbol.png'

const Header = () => {
    return(
        <>
        <div className='fixed w-full top-12'>
            <div className='lg:hidden lg:top-0 bg-orange-100 h-20 flex justify-around items-center'>
                <div><img  className='h-6' src={menu} alt="menu" /></div>
                <div><img className='h-10' src={logo} alt="logo" /></div>
                <div><img className='h-4' src={search} alt="search" /></div>
            </div>

            <div className='lg:hidden flex w-full bg-blue-100 lg:h-12 lg:justify-between object-center shadow-inner items-center'>
                <div className='lg:px-4 w-full'>
                    <h4 className='lg:text-left text-center items-center py-2 text-gray-800 font-serif hover:text-red-400 text-sm lg:text-xl'>Check out our collection with Lime Ricki</h4>
                </div>
                <div className='lg:flex items-center justify-between hidden lg:visible'>
                    <div className='pr-4 uppercase hover:text-red-400'>About</div>
                    <div className='pr-4 uppercase hover:text-red-400'>Partnership</div>
                    <div className='pr-4 uppercase hover:text-red-400'>Press</div>
                    <div className='pr-4 uppercase hover:text-red-400'>Subscribe</div>
                    <div className='pr-4 uppercase hover:text-red-400'>Books</div>
                    <div className='pr-4 uppercase hover:text-red-400'>Courses</div>
                    <div className='pr-14 uppercase hover:text-red-400'>Shop</div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Header;