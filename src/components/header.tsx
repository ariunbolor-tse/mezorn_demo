import React from 'react'

const Header = () => {
    return(
        <>
        <div className='shadow-inner flex items-center justify-between h-12 bg-blue-100'>
            <div className='p-14'>
                <h4 className=' items-center text-gray-800 font-serif hover:text-red-400'>Check out our collection with Lime Ricki</h4>
            </div>
            <div className='flex items-center justify-between'>
                <div className='pr-4 uppercase hover:text-red-400'>About</div>
                <div className='pr-4 uppercase hover:text-red-400'>Partnership</div>
                <div className='pr-4 uppercase hover:text-red-400'>Press</div>
                <div className='pr-4 uppercase hover:text-red-400'>Subscribe</div>
                <div className='pr-4 uppercase hover:text-red-400'>Books</div>
                <div className='pr-4 uppercase hover:text-red-400'>Courses</div>
                <div className='pr-14 uppercase hover:text-red-400'>Our Shop</div>
            </div>

        </div>
        </>
    )
}

export default Header;