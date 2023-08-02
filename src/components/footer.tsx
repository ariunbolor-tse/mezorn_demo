import wave from '../assets/pictures/greenwave.png'
import border from '../assets/pictures/border.png'
import icons from '../assets/pictures/icons-removebg-preview.png'

const Footer = () =>{
    return(
    <>
    <div className='h-40 pb-8'></div>
    <div className='flex'>
        <div className="w-full h-screen bg-cover flex items-end justify-center"
            style={{backgroundImage: `url(${wave})`}}
        >
            <div className='grid grid-cols-5 px-40 pb-20 pt-24'>
                <div>
                    <div className='font-primary text-white text-5xl pb-8'>Follow Us!</div>
                    <img 
                    className='pb-8'
                    src="https://thehousethatlarsbuilt.com/wp-content/uploads/2023/06/Lars-Blanket-Aster-Flower-Design-12-of-17-200x300.webp" alt="" />
                    <div>
                        <img className='w-4/5' src={icons} alt="" />
                    </div>
                </div>
                <div className='pl-12'>
                    <div className='pb-8 font-primary text-white text-5xl'>Explore</div>
                        <ul className='text-white uppercase tracking-wider'>All</ul>
                        <ul className='text-white uppercase tracking-wider'>Houlday</ul>
                        <ul className='text-white uppercase tracking-wider'>DIY & Crafts</ul>
                        <ul className='text-white uppercase tracking-wider'>Decor % Interior</ul>
                        <ul className='text-white uppercase tracking-wider'>Style</ul>
                        <ul className='text-white uppercase tracking-wider'>Food & entertaining</ul>
                        <ul className='text-white uppercase tracking-wider'>ulfe style</ul>
                        <ul className='text-white uppercase tracking-wider'>Things we love</ul>
                </div>

                <div className='pl-12'>
                    <div className='pb-8 font-primary text-white text-5xl'>Company</div>
                        <ul className='text-white uppercase tracking-wider'>About</ul>
                        <ul className='text-white uppercase tracking-wider'>Partnership</ul>
                        <ul className='text-white uppercase tracking-wider'>Press</ul>
                        <ul className='text-white uppercase tracking-wider'>Subscribe</ul>
                        <ul className='text-white uppercase tracking-wider'>Careers</ul>
                </div>

                <div className='pl-12'>
                    <div className='pb-8 font-primary text-white text-5xl'>Help</div>
                        <ul className='text-white uppercase tracking-wider'>FAQ</ul>
                        <ul className='text-white uppercase tracking-wider'>Contact</ul>
                    </div>

                <div className='pl-12'>
                    <div className='pb-8 font-primary text-white text-5xl'>Shop</div>
                        <ul className='text-white uppercase tracking-wider'>Our shop</ul>
                        <ul className='text-white uppercase tracking-wider'>Books</ul>
                        <ul className='text-white uppercase tracking-wider'>Courses</ul>
                        <ul className='text-white uppercase tracking-wider'>Lars' Pick</ul>
                </div>
                
            </div>
        </div>
    </div>
    <div>
        <img src={border} alt="" />
    </div>

    </>
    )
}

export default Footer;