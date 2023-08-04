import { useEffect, useState } from 'react';
import border from '../assets/pictures/border.png'

interface Slide{
  bg1: string;
  bg2: string;
  topic: string;
  text: string;
  btntext: string;
  imgUrl: string;
}

const slidesData: Slide[] = [
    {
        bg1: 'bg-blue-300',
        bg2: 'bg-rose-300',
        topic: 'Colorful phone cases that start conversation',
        text: 'Our phone case line has something for everyone bright florals, color blocking, and fun patterns. The perfect way to spruce up your tech!',
        btntext: 'Shop the collection',
        imgUrl: 'https://thehousethatlarsbuilt.com/wp-content/uploads/2023/06/Retro-Floral-Backdrop-8-of-17-e1686865070276-682x1024.webp'
    },
    {
        bg1: 'bg-rose-300',
        bg2: 'bg-orange-200',
        topic: 'Swim more & Worry less',
        text: 'We designed a line of colorful, pattern mixing swimsuit inspired by Scandinavian florals. They offer inclusive sizing do everyone can find a suit they love.',
        btntext: 'Lime Ricki & Lars',
        imgUrl: 'https://thehousethatlarsbuilt.com/wp-content/uploads/2023/06/home-page-partnerships-block-02-796x1024.webp'
    },
    {
        bg1: 'bg-orange-200',
        bg2: 'bg-blue-300',
        topic: 'Blankets and swaddles to keep you cozzy',
        text: 'A cottage garden collection for babies and adults inspired by whimsical, overgrown flowers featuring quilts, swaddles, crib sheets, and artwork.',
        btntext: 'Clementine kids X Lars',
        imgUrl: 'https://thehousethatlarsbuilt.com/wp-content/uploads/2023/06/home-page-partnerships-block-03-796x1024.webp'
    },
];

const PhoneCase: React.FC = () => {
    const [slideNum, setSlideNum]= useState(0)
    const [slide, setSlide] = useState<Slide[]>([]);


    useEffect(()=>{
        setSlide(slidesData);
        
    },[slide])



    const nextSlide = () =>{
        if(slideNum===2){
            setSlideNum(0)
        }else{
            setSlideNum(slideNum+1)
        }
    }

    const currentSlide = slide.length > 0 ? slidesData[slideNum] : null;


    return(
    <>
    <div className="pt-36 relative h-max lg:flex flex-col hidden lg:vidible">
        <div className="grid grid-cols-11 h-max">
            <div className={`col-span-10 h-full ${currentSlide?.bg1}`}>
            <div className="flex flex-row space-x-36 p-36">
                        <img 
                        className="w-2/5 h-full object-cover"
                        src={currentSlide?.imgUrl} alt="" />
                        <div className="flex flex-col justify-start gap-10">
                            <div className="font-serif text-7xl">{currentSlide?.topic}</div>
                            <div className="font-serif text-3xl "
                            >{currentSlide?.text}</div>
                            <div className="border-black border-b border-dotted flex text-lg items-center">
                                In partnership with
                                <img className='h-6' src="https://thehousethatlarsbuilt.com/wp-content/uploads/2023/04/casetify.webp" alt="" />
                            </div>
                            <button className="border-2 border-black mt-14 py-8 px-32 text-font-3xl tracking-widest uppercase">{currentSlide?.btntext}</button>
                        </div>
                    </div>
            </div>
            <div className={`h-full ${currentSlide?.bg2}`}></div>
        </div>
        <img className='block w-full h-auto object-contain'
        src={border} alt="----" />
        <img
        onClick={nextSlide}
        className='absolute top-1/2 right-28'
        src="https://thehousethatlarsbuilt.com/wp-content/themes/MTT_2023/images/slider-arrow.svg" alt="" />
    </div>

    <div className='lg:hidden'>
        <div className={`${currentSlide?.bg1}`}>
            <div className='flex justify-center'><img
                className='w-2/3 h-2/3 py-12' 
                src={currentSlide?.imgUrl} alt="" /></div>
            <div className='flex justify-center'>
                <div className='font-serif text-center text-3xl w-2/3'>{currentSlide?.topic}</div>
            </div>
            <div className='flex justify-center'>
                <div className='font-serif py-6 w-2/3 text-center'>{currentSlide?.text}</div>
            </div>
            <div className="flex justify-center text-lg items-center">
                In partnership with
                    <img className='h-6' src="https://thehousethatlarsbuilt.com/wp-content/uploads/2023/04/casetify.webp" alt="" />
            </div>
            <div className='flex justify-center pb-6'>
                <button className="border-2 border-black mt-8 py-6 px-8 text-font-3xl tracking-widest uppercase">{currentSlide?.btntext}</button>
            </div>
            <img className='block w-full h-auto object-contain'
            src={border} alt="----" />
        </div>
    </div>
    </>
    )
}

export default PhoneCase;