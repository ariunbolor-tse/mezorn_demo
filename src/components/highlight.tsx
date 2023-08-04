
const Highlight= () =>{
return(
<>
    <div className="relative h-full lg:pt-12 py-24 text-center">
    <div className=" mx-16 border-t lg:border-y border-black border-dotted">
        <div className="lg:grid grid-cols-4 py-24 flex flex-col gap-8">
            <div className="pl-4 pb-8 flex items-center border-b lg:border-b-0 lg:border-r border-black border-dotted">
                <div className="w-5/6 h-48 bg-center bg-cover flex items-center justify-center object-center"
                style={{backgroundImage: `url(https://thehousethatlarsbuilt.com/wp-content/uploads/2023/06/Lars-Blanket-Aster-Flower-Design-12-of-17-200x300.webp)`}}
                >
                </div>
                <div className="text-2xl text-black font-serif pl-4">Lars designed blanket</div>
            </div>
            <div className="pl-4 pb-8 flex items-center border-b lg:border-b-0 lg:border-r border-black border-dotted">
                <div className="w-5/6 h-48 bg-center bg-cover flex items-center justify-center object-center"
                style={{backgroundImage: `url(https://thehousethatlarsbuilt.com/wp-content/uploads/2023/06/Screen-Shot-2023-06-15-at-3.42.17-PM-261x300.webp)`}}
                >
                </div>
                <div className="text-2xl text-black font-serif pl-4">Lars designed blanket</div>
            </div>
            <div className="pl-4 pb-8 flex items-center border-b lg:border-b-0 lg:border-r border-black border-dotted">
                <div className="w-5/6 h-48 bg-center bg-cover flex items-center justify-center object-center"
                style={{backgroundImage: `url(https://thehousethatlarsbuilt.com/wp-content/uploads/2023/06/Retro-Floral-Backdrop-8-of-17-e1686865070276-200x300.webp)`}}
                >
                </div>
                <div className="text-2xl text-black font-serif pl-4">Lars designed blanket</div>
            </div>
            <div className="pl-4 pb-8 flex items-center">
                <div className="w-5/6 h-48 bg-center bg-cover bg-no-repeat flex items-center justify-center object-center"
                style={{backgroundImage: `url(https://thehousethatlarsbuilt.com/wp-content/uploads/2023/06/Lars-Fiskars-Scissors-2-of-2-2-300x300.webp)`}}
                >
                </div>
                <div className="text-2xl text-black font-serif pl-4">Lars designed blanket</div>
            </div>
        </div>
    </div>
    <div className="font-serif px-4 absolute lg:top-2 top-20  bg-orange-100 left-1/2 transform -translate-x-1/2 text-2xl lg:text-6xl ">
    Things We're Loving</div>
    </div>
</>
)
}

export default Highlight;