import React from 'react'

function ServiceSection() {
    return (
        <div>


            <div className='w-full h-full sm:h-screen grid sm:grid-cols-2 grid-cols-1'>
                <div className="w-full flex flex-col items-left justify-center bg-[#7477FF]  py-16">
                    <div className='sm:pl-12 pl-4 pr-2'>
                        <p className='text-5xl my-4 text-left font-bold text-white'>Corporate trainings</p>
                        <p className='text-normal w-full sm:w-3/4 my-4 text-left text-white '>We are creating a best people relations with everyone . This is lobecase our ceservices and trainings make people realise how awe some they are, indeth trainns</p>
                        <button className='text-black bg-[#FFD945] w-fit p-4 mb-12'>Book Now</button>
                    </div>

                </div>
                <div className="w-full flex flex-col items-left justify-center py-16">
                    <div className='sm:pl-12 pl-4 pr-2'>
                        <p className='text-5xl my-4 text-left text-[#7477FF] font-bold'>Private Mentorship</p>
                        <p className='text-normal w-full sm:w-3/4 my-4 text-left '>We are creating a best people relations with everyone . This is lobecase our ceservices and trainings make people realise how awe some they are, indeth trainns</p>
                        <button className='text-black bg-[#FFD945] w-fit p-4 mb-12'>Learn more</button>
                    </div>

                </div>


            </div>


        </div>
    )
}

export default ServiceSection
