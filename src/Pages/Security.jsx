import React from 'react'
import HeroSection from '../components/HeroSection'
import headerImage from '../images/security-hero.png'
import DoubleSection from '../components/DoubleSection'
import section1Image from '../images/security-1.png'
import Footer from '../components/Footer'


function Security() {
    const pageContent = [{
        section: 'hero', title: "Keep your comapny’s data safe from threats", content: "", image: headerImage
    },

    {
        section: 'section-one', title: "", content: "Cyber threats, today, are more complex and more sophisticated than ever before. Cyber attacks pose risks to homeland security and nation’s economy that have far-reaching impact and implications that may not currently be realized. We need the best and the brightest cyber experts to support the mission to protect and defend the country against cyber warfare.\n    Information Security Solutions provides world-class cyber security, information security, and cyber intelligence services and solutions that enable clients to detect and defend against cyber threats to their critical network infrastructures, and establish network stability and resilience that will endure.", buttonText: "I want this", image: section1Image
    },

    ]


    return (
        <div>
            <HeroSection title={pageContent[0].title} image={pageContent[0].image} />
            <h1 className="font-bold text-center text-4xl mt-8 text-white">IT Security</h1>
            <DoubleSection title={pageContent[1].title} content={pageContent[1].content} buttonText={pageContent[1].buttonText} image={pageContent[1].image} switchSide={true} />

      
        </div>
    )
}

export default Security
