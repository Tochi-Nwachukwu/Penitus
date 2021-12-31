import React from 'react'
import HeroSection from '../components/HeroSection'
import headerImage from '../images/about-hero.png'
import section1Image from '../images/about-1.png'
import section2Image from '../images/about-2.png'
import penitusCircle from '../images/penitus-circle.png'
import user1 from '../images/user-1.png'
import user2 from '../images/user-2.png'
import user3 from '../images/user-3.png'
import user4 from '../images/user-4.png'
import Footer from '../components/Footer'

function About() {
    const pageContent = [
        {
            section: 'hero', title: "We help your business           create magic", image: headerImage
        },
    ]

    return (
        <div>
            <HeroSection title={pageContent[0].title} image={pageContent[0].image} />
            <div className='w-full py-12 flex items-center justify-center '>
                <div style={{ backgroundImage: `url(${section1Image})` }} className=" sm:w-1/2 sm:p-52 p-44 sm:ml-16 ml-0 bg-cover"></div>
            </div>

            <div className="sm:ml-14 ml-4 flex flex-col items-center justify-center mb-12">
                <h1 className="font-bold text-white sm:text-4xl text-2xl  w-full sm:w-1/2 mb-8">
                    We are passionate about one thing - excellent delivery
                </h1>
                <p className="text-white sm:w-1/2 w-full ">
                    Penitus Solution is a company with a presence and operations covering Africa and the Middle East since 2019, challenging mediocrity and complacency to help embed cybersecurity advisory, security engineering, and managed security services & processes.
                </p>
            </div>
            <div className="sm:ml-14 ml-4 flex flex-col items-center justify-center ">
                <h1 className="font-bold text-white sm:text-4xl text-2xl text-center w-full sm:w-1/2 mb-8">
                    What we give you
                </h1>
                <p className="text-white sm:w-1/2 w-full ">
                    Penitus Solution is a company with a presence and operations covering Africa and the Middle East since 2019, challenging mediocrity and complacency to help embed cybersecurity advisory, security engineering, and managed security services & processes.
                </p>
            </div>

            <div className='w-full py-12 flex items-center justify-center '>
                <div style={{ backgroundImage: `url(${section2Image})` }} className=" sm:w-1/2 sm:p-52 p-44 sm:ml-16 ml-0 bg-cover"></div>
            </div>
            <div className="sm:ml-14 ml-4 flex flex-col items-center justify-center ">

                <p className="text-white sm:w-1/2 w-full ">
                    With Penitus Solution as your security advisory, we ensure the three pillars of cybersecurity are achieved, leveraging our expertise and experiences to monitor, detect, prevent, and respond to threats. We partnered with robust technology companies issuing comprehensive compliance, integration, and forensics analytic to protect what matters the most to you.
                </p>
            </div>
            <div className='w-full py-12 flex items-center justify-center '>
                <div style={{ backgroundImage: `url(${penitusCircle})` }} className=" w-1/4 sm:p-48 p-36 sm:ml-16 ml-0 bg-contain bg-no-repeat bg-center "></div>
            </div>

            <div className="sm:ml-14 ml-0 flex flex-col items-center justify-center ">
                <h1 className="font-bold text-white sm:text-4xl text-2xl text-center sm:w-1/2 w-full mb-8">
                    Meet Team Penitus
                </h1>

            </div>

            <div className=" w-full py-12 flex justify-center mb-36">
                <div className=' grid grid-cols-2  gap-4  place-content-center'>
                    <div style={{ backgroundImage: `url(${user1})` }} className=" sm:w-1/2 w-1/4 sm:p-36 p-20 bg-cover"></div>
                    <div style={{ backgroundImage: `url(${user2})` }} className=" sm:w-1/2 w-1/4 sm:p-36 p-20 bg-cover"></div>
                    <div style={{ backgroundImage: `url(${user3})` }} className=" sm:w-1/2 w-1/4 sm:p-36 p-20 bg-cover"></div>
                    <div style={{ backgroundImage: `url(${user4})` }} className=" sm:w-1/2 w-1/4 sm:p-36 p-20 bg-cover"></div>
                </div>
            </div>
        </div>
    )
}

export default About
