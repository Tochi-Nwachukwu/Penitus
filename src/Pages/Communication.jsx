import React from 'react'
import HeroSection from '../components/HeroSection'
import headerImage from '../images/internet-hero.png'
import DoubleSection from '../components/DoubleSection'
import section1Image from '../images/internet-1.png'
import Footer from '../components/Footer'


function Communication() {
    const pageContent = [{
        section: 'hero', title: "High Speed Communication For your company", content: "", image: headerImage
    },

    {
        section: 'section-one', title: "", content: "Our 3 CX Phone System is a software based PBX for Windows that works with SIP standard based IP Phones, SIP trunks and VoIP Gateways to provide a full PBX solution – without the inflated cost and management headaches of an ‘old style’ PBX. \n The IP PBX supports all traditional PBX features but also includes many new mobility and productivity features. An IP PBX is also referred to as a VoIP Phone System, IP PBX or SIP serve. \n We also supply mobile computing and machine- to - machine(M2M) communications products and solutions that connect people, devices, and applications over cellular networks.We also offer wireless offers 2G, 3G and 4Gmobile broadband wireless modems, routers and gateways as well as a comprehensive suite of software, tools, and services.", buttonText: "Learn More", image: section1Image
    },

    ]


    return (
        <div>
            <HeroSection title={pageContent[0].title} image={pageContent[0].image} />
            <h1 className="font-bold text-center text-4xl mt-8 text-white">Communication Products</h1>
            <DoubleSection title={pageContent[1].title} content={pageContent[1].content} buttonText={pageContent[1].buttonText} image={pageContent[1].image} switchSide={true} />

          
        </div>
    )
}

export default Communication
