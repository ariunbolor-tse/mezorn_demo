import contact from '../assets/pictures/contact.png'
const Contact = () =>{
    return(
    <>
        <div className="h-screen lg:block hidden">
        <div className="mx-24 relative h-3/4">
            <div className="absolute left-0 ">
                <img 
                className="h-96"
                src="https://thehousethatlarsbuilt.com/wp-content/themes/MTT_2023/images/home-badge-1.svg" alt="" />
            </div>
            <div className="absolute h-88 bottom-0 right-0">
                <img 
                className="h-80"
                src="https://thehousethatlarsbuilt.com/wp-content/themes/MTT_2023/images/home-badge-2.svg" alt="" />
            </div>
            <div className="absolute h-3/4 top-16 left-48">
                <img 
                className="h-full"
                src="https://thehousethatlarsbuilt.com/wp-content/themes/MTT_2023/images/ornamental-bg-scarlet.svg" alt="" />
            </div>
            <div className="h-1/2 mx-56 absolute w-2/3 -rotate-3 top-32 left-8 flex-col">
                <div className="pt-4 text-white font-serif text-7xl text-center pb-4">
                    Let's Keep in Touch</div>
                <div className="px-24 pt-12 h-12 grid grid-cols-5">
                    <input className="h-20 col-span-2 bg-transparent border border-white font-serif p-4 text-white" placeholder='First Name' type="text" />
                    <input className="h-20 col-span-2 bg-transparent border border-white font-serif p-4 text-white" placeholder='Email Address' type="text" />
                    <button className="h-20 bg-rose-300 tracking-widest hover:bg-rose-400" >SUBMIT</button>
                </div>
            </div>
        </div>
        </div>


        <div className='lg:hidden flex justify-center'>
            <div 
            className='bg-cover bg-center h-96 w-2/3'
            style={{backgroundImage: `url(${contact})`}}>
                <div className="pt-8 text-white font-serif text-3xl text-center pb-8">
                    Let's Keep in Touch</div>
                <div className="flex flex-col items-center gap-6">
                    <input className="h-12 bg-transparent border border-white font-serif p-4 w-1/2 text-white" placeholder='First Name' type="text" />
                    <input className="h-12 bg-transparent border border-white font-serif p-4 w-1/2 text-white" placeholder='Email Address' type="text" />
                    <button className="h-12 bg-rose-300 tracking-widest hover:bg-rose-400 w-1/2" >SUBMIT</button>
                </div>
            </div>
        </div>
    </>
    )
}

export default Contact;