import React from 'react'
import Logo from '../images/logo.png'
import Visualizer from './Visualizer'

function Footer() {
    return (
        <div className='w-full sm:p-12 p-4 bg-[#040343] text-white'>
            <div className='grid grid-cols-1 sm:grid-cols-3 sm:ml-36 ml-0'>
                <div>
                    <p className="font-bold text-2xl">
                        SITE MAP
                    </p>

                    <div className="flex py-8">
                        <ul>
                            <li className='my-4 mr-4'>HOME</li>
                            <li className='my-4 mr-4'>ABOUT</li>
                            <li className='my-4 mr-4'>SERVICES</li>
                            <li className='my-4 mr-4'>CONTACT</li>
                            <li className='my-4 mr-4'>LET’S TALK</li>
                        </ul>
                        <ul>
                            <li className='my-4 ml-2'>DEVOPS</li>
                            <li className='my-4 ml-2'>PRIVATE MENTORSHIP</li>
                            <li className='my-4 ml-2'>PERSONAL COACHING</li>
                        </ul>
                    </div>
                </div>
                <div className='sm:pl-4'>
                    <p className='font-bold text-2xl'>CONTACT</p>
                    <p className='sm:py-8 py-2'>112B Polystar Building,
                        Lekki Phase 1 </p>

                    <div style={{ backgroundImage: `url(${Logo})` }} className="w-[96px] h-[22px] bg-cover bg-no-repeat"></div>
                </div>

                <div>
                    <Visualizer />
                </div>
            </div>
            <div>
                <p className='mt-4 py-4 sm:text-center text-left text-sm sm:text-normal'>Copyright 2021 Higher Touch Network</p>
            </div>
        </div>
    )
}

export default Footer
