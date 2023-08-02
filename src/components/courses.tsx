import border from '../assets/pictures/border_ye.png'

const Courses = () => {
    return(
        <>
        <div className="pt-36">
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
            <img className='pt-24'
            src={border} alt="----" />
        </div>
        </>
    )
}

export default Courses