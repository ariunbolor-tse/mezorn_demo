import Gallery from "../utils/gallery";
const Lars = () =>{
    return(
        <>
        <div className='px-20 py-32 relative'>
            <div className='text-center font-serif text-7xl pb-24'>
            The Best of Lars
            </div>
        <div>
            <div className='lg:grid grid-cols-4 gap-4'>
                <Gallery imgUrl='https://thehousethatlarsbuilt.com/wp-content/uploads/2017/09/20170907-Bead-Chandelier-5-1-683x1024.jpg'
                title='Home' 
                description='DIY Beaded Chandelier'/>

                <Gallery imgUrl='https://thehousethatlarsbuilt.com/wp-content/uploads/2019/09/Fan-Palms-Lars-7-of-7-683x1024.webp' 
                title='Arrangements' 
                description='DIY Palm Leaves'/>

                <Gallery imgUrl='https://thehousethatlarsbuilt.com/wp-content/uploads/2014/07/PINK-FLAMINGO-BRIDAL-SHOWER-26.jpg' 
                title='Events' 
                description='Balloon arch tutorial'/>

                <Gallery imgUrl='https://thehousethatlarsbuilt.com/wp-content/uploads/2016/07/IMG_4851-2-1-683x1024.webp' 
                title='Party' 
                description='DIY paper leaf garland'/>

                <Gallery imgUrl='https://thehousethatlarsbuilt.com/wp-content/uploads/2014/04/make-a-notebook-from-a-paper-bag.jpg' 
                title='Paper' 
                description='5 minute bookbinding'/>

                <Gallery imgUrl='https://thehousethatlarsbuilt.com/wp-content/uploads/2019/01/Friendship-Bracelet-Valentines-Printable-7053-683x1024.webp' 
                title='Party' 
                description='DIY Paper Poppy Backdrop'/>

                <Gallery imgUrl='https://thehousethatlarsbuilt.com/wp-content/uploads/2023/02/IWTO-Room-Makeovers-121-of-232.webp' 
                title='Arrangements' 
                description='How to press flowers in 3 methods'/>

                <Gallery imgUrl='https://thehousethatlarsbuilt.com/wp-content/uploads/2019/11/Christmas-Bulb-Advent-Calendar-Reshoot-4-of-7-683x1024.webp' 
                title='Christmas' 
                description='Christmas Bulb Advent Calendar'/>
            </div>
        </div>
            <button className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-amber-300 mt-14 lg:py-8 py-4 px-12 lg:px-32 lg:text-font-3xl text-lg tracking-widest uppercase">See all</button>
        </div>
        </>
    )
}

export default Lars;