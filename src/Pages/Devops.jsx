import React from 'react'
import HeroSection from '../components/HeroSection'
import headerImage from '../images/project-hero.png'
import DoubleSection from '../components/DoubleSection'
import section1Image from '../images/project-1.png'
import Footer from '../components/Footer'


function Devops() {
    const pageContent = [{
        section: 'hero', title: "We manage prefectly the   buildig and deployment  of your IT projects", content: "", image: headerImage
    },

    {
        section: 'section-one', title: "", content: "In the world of Agile Software development, “Continuous Integration” and “Continuous Delivery” have been creating several challenges for Developers and Operations since the very beginning. The list of challenges is huge; however, let’s have a look on one of challenge faced in Continuous Delivery.\n  Once a sprint is finished, product artefacts are handed over to separate team (Operations) for the deployment of the same on the other environment under release pipeline like UAT, Staging, and Production etc. Different configurations of these environments could lead to a situation where shipped product may not work on a specific environment. There could be ‘n’ number of reasons for the same \n  Other than these sorts of challenges, there are possibilities of having lower quality product in delivery cycle along with a lot of redundant work. \n At first glance, it seems that applying automation will be helpful, but it is actually not enough.We have to break the “wall of confusion” between developers and operation team.", buttonText: "I want this", image: section1Image
    },

    ]


    return (
        <div>
            <HeroSection title={pageContent[0].title} image={pageContent[0].image} />
            <h1 className="font-bold text-center text-4xl mt-8 text-white">DevOps Service</h1>
            <DoubleSection title={pageContent[1].title} content={pageContent[1].content} buttonText={pageContent[1].buttonText} image={pageContent[1].image} switchSide={true} />

        </div>
    )
}

export default Devops
