import React from 'react'
import HeroSection from '../components/HeroSection'
import headerImage from '../images/software-hero.png'
import DoubleSection from '../components/DoubleSection'
import section1Image from '../images/software-1.png'



function SoftwareDevelopment() {
    const pageContent = [{
        section: 'hero', title: "We can help you build your amazing apps", content: "", image: headerImage
    },

    {
        section: 'section-one', title: "", content: "We provide full-cycle software development services designed to help you grow your business, increase your ROI, and one-up the competition. Whether it’s custom software engineering, software testing and quality assurance, system integration, technology consulting, or software support — we got you covered.\n    By combining a broad range of technical expertise with an unparalleled commitment to client satisfaction, we have become an authoritative option for companies looking for custom software development services, including supplementing in-house resources in the delivery of discrete project components, integration of the latest technology with existing enterprise infrastructure, creating complex interactive and multimedia environments.", buttonText: "I want this", image: section1Image
    },

    ]


    return (
        <div>
            <HeroSection title={pageContent[0].title} image={pageContent[0].image} />
            <h1 className="font-bold text-center text-4xl mt-8 text-white">Software Development</h1>
            <DoubleSection title={pageContent[1].title} content={pageContent[1].content} buttonText={pageContent[1].buttonText} image={pageContent[1].image} switchSide={true} />

        </div>
    )
}

export default SoftwareDevelopment
