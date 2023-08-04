import border from '../assets/pictures/border_ye.png'

const Courses = () => {
    return(
        <>
        <div className="hidden lg:block pt-36">
            <div className=" h-screen">
                <div className="bg-amber-300">
                    <div className="p-36">
                        <div className="flex">
                            <img 
                            className="w-2/5"
                            src="https://thehousethatlarsbuilt.com/wp-content/uploads/2023/06/Website-Featured-Block-05-943x1024.webp" alt="" />
                            <div className="pl-36">
                                <div className="font-serif text-7xl">Art Courses for Everyone</div>
                                <div className="font-serif text-3xl pt-24 "
                                >Looking for an art curriculum for your child? Or just want to improve
                                your drawing skills? We have a course for you! Courses are available to access anytime
                                so you can complete them at your own pace.</div>
                                <button className="border-2 border-black mt-14 py-8 px-32 text-font-3xl tracking-widest uppercase">Explore Courses</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img className='pt-28'
            src={border} alt="----" />
        </div>


        <div className='lg:hidden'>
        <div className='bg-amber-300'>
            <div className='flex justify-center'><img
                className='w-2/3 h-2/3 py-12' 
                src='https://thehousethatlarsbuilt.com/wp-content/uploads/2023/06/Website-Featured-Block-05-943x1024.webp' alt="" /></div>
            <div className='flex justify-center'>
                <div className='font-serif text-center text-3xl w-2/3'>Art Courses for Everyone</div>
            </div>
            <div className='flex justify-center'>
                <div className='font-serif py-6 w-2/3 text-center'>Looking for an art curriculum for your child? Or just want to improve
                                your drawing skills? We have a course for you! Courses are available to access anytime
                                so you can complete them at your own pace.</div>
            </div>
            <div className='flex justify-center pb-6'>
                <button className="border-2 border-black mt-8 py-6 px-8 text-font-3xl tracking-widest uppercase">Explore courses</button>
            </div>
            <img className='block w-full h-auto object-contain'
            src={border} alt="----" />
        </div>
    </div>
        </>
    )
}

export default Courses