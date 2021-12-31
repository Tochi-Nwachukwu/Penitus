import React from 'react'

function SingleSection({ title}) {
    return (
        <div className='w-full  py-36 bg-cover bg-center  flex items-center justify-center flex flex-col text-center  '>
            <h1 className='sm:text-2xl text-2xl sm:ml-16 ml-0 text-white drop-shadow'>{title}</h1>

        </div>
    )
}

export default SingleSection
