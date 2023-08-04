import React from "react";
import pic1 from '../assets/pictures/ent1.jpg'
import pic2 from '../assets/pictures/ent2.jpg'
import pic3 from '../assets/pictures/ent3.webp'
import arrow from '../assets/pictures/arrow.svg'

const Section1 = () =>{
    return(
        <>
        <div className="pt-24 lg:pt-0 mt-4 grid lg:grid-cols-3 grid-cols-5 gap-4 h-screen">
            <div>
                <div className="w-full h-4/6 overflow-hidden">
                <img className="w-full h-full object-cover transition duration-300 transform scale-100 hover:scale-105" src={pic1} alt="pic1" />
                </div>
                <div className="h-36 flex justify-end items-center">
                    <img className='h-4 lg:h-6' src={arrow} alt="arrow" />
                </div>
            </div>
            <div className="col-span-3 lg:col-span-1 overflow-hidden">
                <img className="w-full h-3/5 object-cover transition duration-300 transform scale-100 hover:scale-105" src={pic2} alt="pic2" />
                <div className="flex-col text-center">
                    <div className="pt-10 pb-4 uppercase text-red-400">Food & Entertaining</div>
                    <div className="text-2xl font-serif lg:text-5xl">18 Delicious summertime treats</div>
                </div>
            </div>
            <div className="overflow-hidden">
                <img className="w-full h-4/6 transition duration-300 object-cover transform scale-100 hover:scale-105" src={pic3} alt="pic3" />
                <div className="h-36 flex justify-start items-center">
                    <img className='h-4 lg:h-6 transform rotate-180' src={arrow} alt="arrow2" />
                </div>
            </div>
        </div>
        </>
    )
}

export default Section1;