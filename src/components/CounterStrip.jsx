import React, { useState, useEffect } from 'react'

function CounterStrip() {
    let [count, setCount] = useState({ servers: 180, clients: 100, years: 3 })

    const countFunction = () => {
        setInterval(() => {
            if (count.servers <= 254) {
                setCount({ servers: count.servers += 2, clients: count.clients += 2, years: count.years += 1 })
            }
        }, 100)


    }


    useEffect(() => {
        countFunction()

    }, [count.servers])

    return (
        <div className='w-full py-12 flex justify-around sm:px-16 px-4'>
            <div className='p-2'>
                <h1 className="font-bold sm:text-5xl text-2xl mb-2 text-white">{count.servers}</h1>
                <p className="font-bold sm:text-2xl text-sm text-white ">Servers installed</p>
            </div>
            <div className='p-2'>
                <h1 className="font-bold sm:text-5xl text-2xl mb-2 text-white">{count.clients}</h1>
                <p className="font-bold sm:text-2xl text-sm text-white ">Clients served</p>
            </div>
            <div className='p-2'>
                <h1 className="font-bold sm:text-5xl text-2xl mb-2 text-white ">{count.years}</h1>
                <p className="font-bold sm:text-2xl text-sm text-white">Operation years</p>
            </div>

        </div>
    )
}

export default CounterStrip
