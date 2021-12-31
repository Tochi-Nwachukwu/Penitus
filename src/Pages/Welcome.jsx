import React from 'react'
import HeroSection from '../components/HeroSection'
import headerImage from '../images/home-hero.png'
import DoubleSection from '../components/DoubleSection'
import section1Image from '../images/home-1.png'
import section2Image from '../images/home-2.png'
// import section3Image from '../images/2.png'
import SingleSection from '../components/SingleSection'
import ServiceSection from '../components/ServiceSection'
import Footer from '../components/Footer'
import CounterStrip from '../components/CounterStrip'

function Welcome() {

    const pageContent = [{
        section: 'hero', title: "Secure Your  Business with Cutting Edge IT", content: "", image: headerImage
    },

    { section: 'section-one', title: "Deeply Rooted in Tech", content: "We provide unique sales & marketing services to technology firms seeking expansion into the Middle East and Africa. \n Empowered with all the local, technical, sales and marketing skills you need, your business will grow throughout the region.", buttonText: "Learn More", image: section1Image },

    {
        section: 'section-two', title: "Why Penitus is for You", content: "We provide unique sales & marketing services to technology firms seeking expansion into the Middle East and Africa. \n  Empowered with all the local, technical, sales and marketing skills you need, your business will grow throughout the region.", buttonText: "Learn about our trainings", image: section2Image
    },
    {
        section: 'section-three', title: "Don’t take our word for it. Find out from our top clients"
    }



    ]
    return (
        <div>


            <HeroSection title={pageContent[0].title} image={pageContent[0].image} />

            <DoubleSection title={pageContent[1].title} content={pageContent[1].content} buttonText={pageContent[1].buttonText} image={pageContent[1].image} switchSide={true} />

            <DoubleSection title={pageContent[2].title} content={pageContent[2].content} buttonText={pageContent[2].buttonText} image={pageContent[2].image} switchSide={false} />

            <SingleSection title={pageContent[3].title} />
            <CounterStrip />
            {/* <ServiceSection /> */}

            
        </div>
    )
}

export default Welcome
