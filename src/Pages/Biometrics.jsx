import React from 'react'
import HeroSection from '../components/HeroSection'
import headerImage from '../images/biometrics-hero.png'
import DoubleSection from '../components/DoubleSection'
import section1Image from '../images/biometrics-1.png'
import Footer from '../components/Footer'


function Biometrics() {
    const pageContent = [{
        section: 'hero', title: "Secure your facility using the latest biometric technologies", content: "", image: headerImage
    },

    {
        section: 'section-one', title: "", content: "We provide the latest non-intrusive biometric security solutions. These biometric security products incorporate fingerprint, face, iris, voice, and signature recognition. \n These biometric technologies can be used separately or together in one powerful package to meet your entire authentication and identification needs. We also offer customized solutions to allow integration of our biometric security software with your existing IT environment.\n Our biometric devices and biometric software products include Fingerprint Time & Attendance, Fingerprint Access Control systems, USB Fingerprint Scanners, Embedded Fingerprint reader Modules, Fingerprint SDK (API), Biometric Computer Logon, Mobile Fingerprint Scanner, Iris Access Control system, Web Based ID, Signature Verification, Voice Authentication Systems etc.", buttonText: "I want this", image: section1Image
    },

    ]


    return (
        <div>
            <HeroSection title={pageContent[0].title} image={pageContent[0].image} />
            <h1 className="font-bold text-center text-4xl mt-8 text-white">Biometrics Products</h1>
            <DoubleSection title={pageContent[1].title} content={pageContent[1].content} buttonText={pageContent[1].buttonText} image={pageContent[1].image} switchSide={true} />

           
        </div>
    )
}

export default Biometrics
