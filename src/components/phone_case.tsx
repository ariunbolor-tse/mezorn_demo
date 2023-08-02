import border from '../assets/pictures/border.png'

const PhoneCase= () => {
    return(
    <>
    <div className="pt-36">
        <div className="grid grid-cols-11 h-screen">
            <div className="col-span-10 h-full bg-blue-300">
                <div className="p-36">
                    <div className="flex">
                        <img 
                        className="w-2/5"
                        src="https://thehousethatlarsbuilt.com/wp-content/uploads/2023/06/Retro-Floral-Backdrop-8-of-17-e1686865070276-682x1024.webp" alt="" />
                        <div className="pl-36">
                            <div className="font-serif text-7xl">Colorful phone cases that start conversation</div>
                            <div className="font-serif text-3xl pt-24 "
                            >Our phone case line has something for everyone bright florals, color blocking, and fun patterns. The perfect way to spruce up your tech!</div>
                            <div className="border-black border-b border-dotted pb-12 flex text-lg items-center pt-6">
                                In partnership with
                                <img className='h-6' src="https://thehousethatlarsbuilt.com/wp-content/uploads/2023/04/casetify.webp" alt="" />
                            </div>
                            <button className="border-2 border-black mt-14 py-8 px-32 text-font-3xl tracking-widest uppercase">Shop the collection</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" h-full bg-rose-300"></div>
            {/* <img
            src="https://thehousethatlarsbuilt.com/wp-content/themes/MTT_2023/images/slider-arrow.svg" alt="" /> */}
            
        </div>
        <img className='pt-56'
        src={border} alt="----" />
    </div>
    </>
    )
}

export default PhoneCase;