import React from 'react'
import logo from '../assets/pictures/cropped-lars-logo.webp'
import menu from '../assets/pictures/menu.png'
import search from '../assets/pictures/search-interface-symbol.png'

const Menu = ()=>{
    return(
    <>
        <div className='hidden lg:visible lg:flex w-full bg-blue-100 lg:h-12 lg:justify-between object-center shadow-inner items-center'>
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
        <div className='pt-4 lg:flex justify-between items-center hidden lg:visible'>
            <div className='pl-14 flex'>
                <img  className='h-8 pr-4' src={menu} alt="menu" />
                <img className='h-10' src={logo} alt="logo" />
            </div>
            <div className='invisible lg:visible flex items-center'>
                <div className='pr-4 uppercase font-sans font-bold hover:text-red-400'>Holiday</div>
                <div className='pr-4 uppercase font-sans font-bold hover:text-red-400'>DIY & Crafts</div>
                <div className='pr-4 uppercase font-sans font-bold hover:text-red-400'>Decor & Interiors</div>
                <div className='pr-4 uppercase font-sans font-bold hover:text-red-400'>Style</div>
                <div className='pr-4 uppercase font-sans font-bold hover:text-red-400'>Food & Entertaining</div>
                <div className='pr-4 uppercase font-sans font-bold hover:text-red-400'>Lifestyle</div>
                <div className='pr-4 uppercase font-sans font-bold hover:text-red-400'>Things we love</div>
            </div>
            <div className='pr-14 flex items-center'>
               <button className='bg-transparent'>Search</button>
               <img className='h-4 pl-2' src={search} alt="search" />
            </div>
        </div>
    </>
    )
}
export default Menu;