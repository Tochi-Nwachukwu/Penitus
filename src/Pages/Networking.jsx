import React from 'react'
import HeroSection from '../components/HeroSection'
import headerImage from '../images/network-hero.png'
import DoubleSection from '../components/DoubleSection'
import section1Image from '../images/network-1.png'
import Footer from '../components/Footer'


function Networking() {
    const pageContent = [{
        section: 'hero', title: "Network Infrastructure   Management To Keep  Your Business Moving", content: "", image: headerImage
    },

    {
        section: 'section-one', title: "", content: "Managing the hardware and software that enable the connections, communications and operations within your IT ecosystem so everything flows smoothly is what Network Infrastructure Management is all about. \n \n With smooth-flowing IT comes the ability for your team to work uninterrupted.\n As the leading Hardware/Infrastructure and Enterprise Network service provider in Nigeria, Our network management experts focus on getting your information packets where they need to go as quickly as possible. This means we fix things when they break, but more importantly, we take all kinds of proactive actions to keep things from breaking in the first place.\n To discuss how our Hardware/Infrastructure and Enterprise Network services can benefit you and your company, contact us today.", buttonText: "I want this", image: section1Image
    },

    ]


    return (
        <div>
            <HeroSection title={pageContent[0].title} image={pageContent[0].image} />
            <h1 className="font-bold text-center text-4xl mt-8 text-white">Hardware/Infrastructure and Enterprise Network</h1>
            <DoubleSection title={pageContent[1].title} content={pageContent[1].content} buttonText={pageContent[1].buttonText} image={pageContent[1].image} switchSide={true} />

        </div>
    )
}

export default Networking
