
const Highlight= () =>{
return(
<>
    <div className="relative h-full pt-12 text-center">
    <div className=" mx-16 border-y border-black border-dotted">
        <div className="grid grid-cols-4 py-24">
            <div className="pl-4 flex items-center border-r border-black border-dotted">
                <div className="w-1/2 h-48 bg-cover flex items-center justify-center object-center"
                style={{backgroundImage: `url(https://thehousethatlarsbuilt.com/wp-content/uploads/2023/06/Lars-Blanket-Aster-Flower-Design-12-of-17-200x300.webp)`}}
                >
                </div>
                <div className="text-2xl text-black font-serif pl-4">Lars designed blanket</div>
            </div>
            <div className="pl-4 flex items-center border-r border-black border-dotted">
                <div className="w-1/2 h-48 bg-cover flex items-center justify-center object-center"
                style={{backgroundImage: `url(https://thehousethatlarsbuilt.com/wp-content/uploads/2023/06/Screen-Shot-2023-06-15-at-3.42.17-PM-261x300.webp)`}}
                >
                </div>
                <div className="text-2xl text-black font-serif pl-4">Lars designed blanket</div>
            </div>
            <div className="pl-4 flex items-center border-r border-black border-dotted">
                <div className="w-1/2 h-48 bg-cover flex items-center justify-center object-center"
                style={{backgroundImage: `url(https://thehousethatlarsbuilt.com/wp-content/uploads/2023/06/Retro-Floral-Backdrop-8-of-17-e1686865070276-200x300.webp)`}}
                >
                </div>
                <div className="text-2xl text-black font-serif pl-4">Lars designed blanket</div>
            </div>
            <div className="pl-4 flex items-center">
                <div className="w-1/2 h-48 bg-cover flex items-center justify-center object-center"
                style={{backgroundImage: `url(https://thehousethatlarsbuilt.com/wp-content/uploads/2023/06/Lars-Fiskars-Scissors-2-of-2-2-300x300.webp)`}}
                >
                </div>
                <div className="text-2xl text-black font-serif pl-4">Lars designed blanket</div>
            </div>
        </div>
    </div>
    <div className="font-serif px-4 absolute top-2  bg-orange-100 left-1/2 transform -translate-x-1/2 text-6xl ">
    Things We're Loving</div>
    </div>
</>
)
}

export default Highlight;