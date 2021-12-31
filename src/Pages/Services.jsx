import React from 'react'
import HeroSection from '../components/HeroSection'
import DoubleSection from '../components/DoubleSection'
import headerImage from '../images/home-hero.png'
import serviceImage1 from '../images/service-1.png'
import serviceImage2 from '../images/service-2.png'
import serviceImage3 from '../images/service-3.png'
import serviceImage4 from '../images/service-4.png'
import serviceImage5 from '../images/service-5.png'
import serviceImage6 from '../images/service-6.png'
import serviceImage7 from '../images/service-7.png'
import serviceImage8 from '../images/service-8.png'
// import section2Image from '../images/story-2.png'
// import section1Image from '../images/story-1.png'
// import headerImage from '../images/story-header.png'
// import section3Image from '../images/story-3.png'
import SingleSection from '../components/SingleSection'

import Footer from '../components/Footer'
import Card from '../components/Card'

function Services() {

    const pageContent = {
        image: headerImage, title: "Customized solutions built specially for you"
    }

    const cardContent = [
        { title: "Communication Products", content: "Internal company Networks, tele conferencing, latest communication systems.", buttonTitle: "I want this", link: "/services/communication-products", image: serviceImage1 },
        { title: "Biometric Access Control", content: "We provide the latest non-intrusive biometric security solutions. These biometric security products ", buttonTitle: "I want this", link: "/services/biometric-access-control", image: serviceImage2 },
        { title: "IT Training", content: "With our IT project management services, you will save time.", buttonTitle: "I want this", link: "/services/consulting", image: serviceImage3 },
        { title: "Data Analysis", content: "Internal company Networks, tele conferencing, latest communication systems.", buttonTitle: "I want this", link: "/services/data-analysis", image: serviceImage4 },
        { title: "Information Security", content: "Internal company Networks, tele conferencing, latest communication systems.", buttonTitle: "I want this", link: "/services/security", image: serviceImage5 },
        { title: "Infrasturcture", content: "Internal company Networks, tele conferencing, latest communication systems.", buttonTitle: "I want this", link: "/services/networking", image: serviceImage6 },
        { title: "Software development", content: "Internal company Networks, tele conferencing, latest communication systems.", buttonTitle: "I want this", link: "/services/software-development", image: serviceImage7 },
        { title: "Project Management", content: "Internal company Networks, tele conferencing, latest communication systems.", buttonTitle: "I want this", link: "/services/project-management", image: serviceImage8 },
        { title: "Devops", content: "Internal company Networks, tele conferencing, latest communication systems.", buttonTitle: "I want this", link: "/services/devops", image: serviceImage8 }
    ]
    return (
        <div>

            <HeroSection title={pageContent.title} image={pageContent.image} />

            <div className="grid sm:grid-cols-3 grid-cols-1 gap-5 sm:ml-36 ml-px">
                {cardContent.map(element => (
                    <Card title={element.title} image={element.image} content={element.content} link={element.link} buttonText={element.buttonTitle} />
                ))}
            </div>
            
        </div >
    )
}

export default Services
