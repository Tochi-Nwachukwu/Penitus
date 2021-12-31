import React from 'react'



function HeroSection({ title, image }) {
    return (
        <div style={{ backgroundImage: `url(${image})` }} className='w-full h-screen bg-cover bg-no-repeat bg-center flex items-center'>
            <h1 className="sm:w-1/2 w-3/4 sm:text-7xl text-4xl sm:ml-[200px] ml-4 leading-loose font-bold text-white sm:px-8 ">{title}</h1>

        </div>
    )
}

export default HeroSection
