import React, {useState, useEffect} from 'react'
import Gallery from '../utils/gallery';

const Craft = ()=>{
    return(
    <>
        <div className='pt-80'></div>
        <div className='px-20'>
        <div className='flex justify-between items-center pb-8'>
            <div className='text-4xl font-serif py-8'>Camp Crafts</div>
            <div className='flex'>
                <div className='uppercase tracking-widest justify-center pr-4'>View All</div>
                <img 
                src="https://thehousethatlarsbuilt.com/wp-content/themes/MTT_2023/images/squiggle-arrow.svg" alt="" />
            </div>
        </div>
        <div>
            <div className='grid grid-cols-4 gap-4'>
                <Gallery imgUrl='https://thehousethatlarsbuilt.com/wp-content/uploads/2023/01/IWTO-Room-Makeovers-204-of-232-1.webp' 
                title='DIY & Crafts' 
                description='Camp Lars: Summer Activities for Kids'/>

                <Gallery imgUrl='https://thehousethatlarsbuilt.com/wp-content/uploads/2019/01/Friendship-Bracelet-Valentines-Printable-7053-683x1024.webp' 
                title='DIY & Crafts' 
                description='How to make a heart friendship bracelet'/>

                <Gallery imgUrl='https://thehousethatlarsbuilt.com/wp-content/uploads/2022/05/Lars-Cyanotype-Floral-Sunprints-2-of-11.webp' 
                title='Craft the Rainbow' 
                description='Cyanotype Sun Prints'/>

                <Gallery imgUrl='https://thehousethatlarsbuilt.com/wp-content/uploads/2021/07/lunchsacks-685x1024.webp' 
                title='DIY & Crafts' 
                description='DIY Reusable Lunch Sack'/>
                
            </div>
        </div>
        </div>
    </>
    )
}

export default Craft;