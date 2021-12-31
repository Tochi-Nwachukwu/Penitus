import React from 'react'
import Arrow from '../images/arrow-right.png'
import { Link } from 'react-router-dom'

function Card({ image, title, content, buttonText, link }) {
    return (
        <div className=' sm:m-8 m-4'>
            <div style={{ backgroundImage: `url(${image})` }} className="px-36 py-40 bg-no-repeat bg-cover bg-center ">

            </div>

            <div className="content">
                <h1 className="text-white font-bold  text-xl sm:text-2xl my-4">
                    {title}
                </h1>

                <p className="text-white">
                    {content}
                </p>

            </div>

            <div className='w-full sm:flex sm:justify-start justify-center'>
                <Link to={link}>
                    <button className='p-4 bg-[#7289F2] text-white flex mt-8 '>
                        {buttonText}
                        <div style={{ backgroundImage: `url(${Arrow})` }} className='h-6 w-6 ml-4 '>
                        </div>
                    </button>
                </Link>

            </div>
        </div>
    )
}

export default Card
