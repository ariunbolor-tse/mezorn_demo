import Gallery from "../utils/gallery";

const Interior = () =>{
    return(
    <>
        <div className='px-20 py-32'>
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
                title='Decor & Interiors' 
                description='A fridge made to look like a cabinet'/>

                <Gallery imgUrl='https://thehousethatlarsbuilt.com/wp-content/uploads/2023/01/IWTO-Room-Makeovers-201-of-232.webp' 
                title='Decor & Interiors' 
                description='Before and afters of our home renovation'/>

                <Gallery imgUrl='https://thehousethatlarsbuilt.com/wp-content/uploads/2023/02/IWTO-Room-Makeovers-121-of-232.webp' 
                title='Before & After Makeover' 
                description='A Scandinavian-folk inspired staircase'/>

                <Gallery imgUrl='https://thehousethatlarsbuilt.com/wp-content/uploads/2013/08/Back-to-School-Stickers-Michele-Brummer-Everett-2-of-8.webp' 
                title='Decor & Interiors' 
                description='Antique tile turned into wallpaper'/>
                
            </div>
        </div>
        </div>
    </>
    )
}

export default Interior;