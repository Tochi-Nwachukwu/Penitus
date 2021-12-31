import React from 'react'

function DoubleSection({ title, content, buttonText, image, switchSide }) {
    return (
        <div>
            {switchSide == false &&
                <div className='w-full sm:h-screen grid grid-cols-1 sm:grid-cols-2 sm:pl-12 pl-4 sm:my-36 my-8'>
                    <div className="w-full flex flex-col items-left justify-center mb-12 sm:ml-36">
                        <h1 className='text-4xl my-4 text-left font-bold text-white'>{title}</h1>
                        <p className=' text-white text-normal sm:w-3/4 pr-8 w-full mb-2 my-4 text-left '>{content.split(".")[0]}</p>
                        <p className=' text-white text-normal sm:w-3/4 pr-8 w-full mb-8 my-4 text-left '>{content.split(".")[1]}</p>
                        <button className='focus:outline-none sm:text-2xl text-normal text-black bg-[#7289F2] text-white w-fit p-4 '>{buttonText}</button>

                    </div>
                    <div style={{ backgroundImage: `url(${image})` }} className="w-full bg-contain bg-no-repeat bg-right sm:w-[530px] h-[520px]"></div>
                </div>}

            {switchSide == true &&
                <div className='w-full sm:min-h-screen grid grid-cols-1 sm:grid-cols-2 sm:pl-40 px-6 sm:mt-12 my-8   '>
                    <div style={{ backgroundImage: `url(${image})` }} className="w-full bg-contain bg-no-repeat bg-right sm:w-[530px]  sm:py-40"></div>
                    <div className="w-full flex flex-col items-left justify-center sm:pl-12 pl-0 ">
                        <h1 className='text-4xl my-4 text-left font-bold text-white '>{title}</h1>

                        {content.split("\n").map(element => (<p className=' text-white text-normal sm:w-5/6 pr-8 w-full mb-2 my-4 text-left '>{element}</p>))}

                        <button className='focus:outline-none mt-8 sm:text-2xl text-normal text-black bg-[#7289F2] text-white w-fit p-4 '>{buttonText}</button>

                    </div>
                </div>}
        </div>
    )
}

export default DoubleSection
