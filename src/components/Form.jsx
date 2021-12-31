import React from 'react'
import Arrow from '../images/arrow-right.png'

function Form() {
    return (
        <div className='flex items-center justify-center my-16 sm:ml-6 ml-0' >
            <form action="post" className='sm:w-3/4 w-full px-4'>
                <div className="w-full">
                    <h1 className='font-bold text-white mb-4 '>firstName</h1>
                    <input type="text" className='w-full p-4' />
                </div>
                <div className="w-full mt-6">
                    <h1 className='font-bold text-white mb-4 '>Last Name</h1>
                    <input type="text" className='w-full p-4' />
                </div>
                <div className="w-full mt-6">
                    <h1 className='font-bold text-white mb-4 '>Email Address</h1>
                    <input type="text" className='w-full p-4' />
                </div>
                <div className="w-full mt-6 mb-6">
                    <h1 className='font-bold text-white mb-4 '>firstName</h1>

                    <textarea type='text' className='w-full p-4' rows="4" cols="50">

                    </textarea>
                </div>
                <div className='w-full flex justify-end '>
                    <button className='p-4 bg-[#7289F2] text-white flex mt-8 '>
                        Shoot
                        <div style={{ backgroundImage: `url(${Arrow})` }} className='h-6 w-6 ml-4 '>
                        </div>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form
