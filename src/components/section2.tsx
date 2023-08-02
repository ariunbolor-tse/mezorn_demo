import React from 'react'
import bluewave from '../assets/pictures/bluewave-removebg-preview.png'
import greenwave from '../assets/pictures/greenwave.png'
import arrow from '../assets/pictures/whiteArrow.svg'
const Section2 = () =>{
    return(
    <>
    <div className='grid grid-cols-2 pb-12 h-screen'>
        <div >
            <div className="w-full h-36 bg-cover flex items-center justify-center object-center"
            style={{backgroundImage: `url(${bluewave})`}}
            >
            </div>
            <div className='h-full bg-blue-300 flex justify-center items-center object-center'>
                    <img className='pb-4 w-2/3'
                    src="https://thehousethatlarsbuilt.com/wp-content/uploads/2023/04/The-House-That-Lars-Built-Great-Artists-Michaels-Pro-3-of-7-1-833x1024.webp" alt="pic" />
            </div>
        </div>
        <div>
            <div className="w-full h-36 bg-cover"
            style={{backgroundImage: `url(${greenwave})`}}
            ></div> 
            <div className='h-full bg-green-800 flex justify-center'>
                <div className='w-2/3 pt-14'>
                <div>
                    <div className='text-white text-2xl'>Welcome to Jars!</div>
                    <div className='text-white text-7xl font-serif'>Inspiration for</div>
                    <div className='text-white text-7xl font-serif'>an artful life</div>
                </div>
                <div className='pt-24'>
                    <div className='border-y border-dotted py-8 text-white text-xl flex justify-between items-center'>
                        Over 1'000 craft ideas
                        <img className='transform rotate-180 h-4' src={arrow} alt="-->" />
                    </div>
                    <div className='border-b border-dotted py-8 text-white text-xl flex justify-between items-center'>
                        Inspiring interiors
                        <img className='transform rotate-180 h-4' src={arrow} alt="-->" />
                    </div>
                    <div className='border-b border-dotted py-8 text-white text-xl flex justify-between items-center'>
                        Creative courses for kids & adults
                        <img className='transform rotate-180 h-4' src={arrow} alt="-->" />
                    </div>
                    <div className='border-b border-dotted py-8 text-white text-xl flex justify-between items-center'>
                        Shop our favourite things
                        <img className='transform rotate-180 h-4' src={arrow} alt="-->" />
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default Section2;