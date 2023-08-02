import React from 'react';

interface GalleryProps{
    imgUrl: string,
    title: string,
    description: string
}

const Gallery: React.FC<GalleryProps> = ({imgUrl, title, description})=>{

    return(
    <>
        <div className='pb-8'>
            <div>
                <img src={imgUrl} alt="img" />
            </div>
            <div className='pt-4 text-2xl text-red-500 uppercase tracking-wider'>{title}</div>
            <div className='pt-4 font-serif text-3xl'>{description}</div>
        </div>
    </>
    )
    
}
export default Gallery;
