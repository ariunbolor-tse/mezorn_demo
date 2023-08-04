import React from 'react'
import logo from '../assets/pictures/cropped-lars-logo.webp'
import menu from '../assets/pictures/menu.png'
import search from '../assets/pictures/search-interface-symbol.png'

const Menu = ()=>{
    return(
    <>
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