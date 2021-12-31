import React from 'react'
import HeroSection from '../components/HeroSection'
import headerImage from '../images/consulting-hero.png'
import DoubleSection from '../components/DoubleSection'
import section1Image from '../images/consulting-1.png'
import Footer from '../components/Footer'


function Consulting() {
    const pageContent = [{
        section: 'hero', title: "IT Consulting to guide your company’s cyber growth.", content: "", image: headerImage
    },

    {
        section: 'section-one', title: "", content: "Penitus Solutions offers services to streamline IT strategy creating, information security assurance and system integration, ensure smooth and effective digital transformation and improve digital customer experience.\n  Our approach is to focus on the client’s strategy and long-term goals, so we skip the noise of ufb02eeting trends and equip the business with reliable and agile technology to achieve enduring outcomes.\n \n Penitus Solutions offers services to streamline IT strategy creating, information security assurance and system integration, ensure smooth and effective digital transformation and improve digital customer experience. \n  Our approach is to focus on the client’s strategy and long-term goals, so we skip the noise of ufb02eeting trends and equip the business with reliable and agile technology to achieve enduring outcomes.", buttonText: "I want this", image: section1Image
    },

    ]


    return (
        <div>
            <HeroSection title={pageContent[0].title} image={pageContent[0].image} />
            <h1 className="font-bold text-center text-4xl mt-8 text-white">IT Consulting</h1>
            <DoubleSection title={pageContent[1].title} content={pageContent[1].content} buttonText={pageContent[1].buttonText} image={pageContent[1].image} switchSide={true} />

         
        </div>
    )
}

export default Consulting
