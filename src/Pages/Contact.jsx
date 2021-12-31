import React from 'react'
import Footer from '../components/Footer'
import Form from '../components/Form'
import HeroSection from '../components/HeroSection'
import headerImage from '../images/contact-hero.png'

function Contact() {

    const pageContent = [
        {
            section: 'hero', title: "Shoot us a mail. We always respond.", image: headerImage
        },
    ]

    return (
        <div>
            <HeroSection title={pageContent[0].title} image={pageContent[0].image} />
            <Form />
           
        </div>
    )
}

export default Contact
